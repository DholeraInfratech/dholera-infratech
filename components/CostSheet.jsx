"use client";

import { useState, useEffect } from "react";
import jsPDF from "jspdf";

export default function CostSheet() {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    mobile: "",
    plotNo: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
  });

  const [plot, setPlot] = useState({
    areaSqYd: "",
    areaSqFt: "",
    rate: 9250,
  });

  const [plotErrors, setPlotErrors] = useState({
    areaSqYd: "",
  });

  const [charges, setCharges] = useState({
    devPerYd: 500,
    plcPerYd: 250,
    maintenance: 50000,
    legal: 20000,
  });

  const [totals, setTotals] = useState({
    plotAmount: 0,
    devAmount: 0,
    plcAmount: 0,
    addCharges: 0,
    totalPayable: 0,
  });

  useEffect(() => {
    const area = parseFloat(plot.areaSqYd) || 0;
    const rate = parseFloat(plot.rate) || 0;
    const devRate = parseFloat(charges.devPerYd) || 0;
    const plcRate = parseFloat(charges.plcPerYd) || 0;
    const maintenance = parseFloat(charges.maintenance) || 0;
    const legal = parseFloat(charges.legal) || 0;

    const plotAmount = area * rate;
    const devAmount = area * devRate;
    const plcAmount = area * plcRate;
    const addCharges = devAmount + maintenance + legal;
    const totalPayable = plotAmount + plcAmount + addCharges;

    setTotals({
      plotAmount,
      devAmount,
      plcAmount,
      addCharges,
      totalPayable,
    });
  }, [plot, charges]);

  const handleChange = (setFunc) => (e) => {
    const { name, value } = e.target;

    const numericFields = [
      "areaSqYd",
      "areaSqFt",
      "rate",
      "devPerYd",
      "plcPerYd",
      "maintenance",
      "legal",
    ];

    if (numericFields.includes(name)) {
      let val = value.replace(/[^0-9.]/g, "");

      // Allow only one decimal
      const parts = val.split(".");
      if (parts.length > 2) return;

      // Remove leading zeros unless before decimal
      if (parts[0].length > 1 && parts[0].startsWith("0")) {
        parts[0] = parts[0].replace(/^0+/, "") || "0";
      }

      val = parts.join(".");
      const parsed = val === "" ? "" : parseFloat(val);

      setFunc((prev) => {
        const updated = { ...prev, [name]: parsed };

        // ✅ Auto-convert areaSqYd → areaSqFt
        if (name === "areaSqYd" && setFunc === setPlot) {
          updated.areaSqFt = parsed * 9;
        }

        return updated;
      });
    } else {
      // For non-numeric fields like name, email, etc.
      setFunc((prev) => ({ ...prev, [name]: value }));
    }
  };

  //  const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString('en-IN')}`;

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(value || 0);

  const downloadPDF = () => {
    const newErrors = {
      name: !customer.name ? "Name is required" : "",
      mobile: !customer.mobile ? "Contact number is required" : "",
      areaSqYd: !plot.areaSqYd ? "Area in Sq. Yards is required" : "",
    };
    const newPlotErrors = {
      areaSqYd: plot.areaSqYd ? "" : "Area (Sq. Yards) is required",
    };
    setErrors(newErrors);
    setPlotErrors(newPlotErrors);

    const hasErrors = Object.values(newErrors).some((err) => err);
    if (hasErrors) return;

    const doc = new jsPDF();
    let y = 20;

    const rowHeight = 10;
    const labelX = 20;
    const valueX = 130;
    const tableWidth = 170;

    const drawCenteredTitle = (title, size = 16, offsetY = 10) => {
      doc.setFontSize(size);
      doc.setFont("helvetica", "bold");
      doc.text(title, 105, y, { align: "center" });
      y += offsetY;
    };

    const drawSectionHeader = (title) => {
      doc.setFillColor("#E5E7EB"); // light gray
      doc.rect(20, y, tableWidth, rowHeight, "F");
      doc.setFontSize(13);
      doc.setTextColor("#059669"); // green
      doc.setFont("helvetica", "bold");
      doc.text(title, labelX + 2, y + 7);
      y += rowHeight;
    };

    const drawRow = (label, value) => {
      doc.setDrawColor("#D1D5DB"); // border gray
      doc.setFontSize(11);
      doc.setTextColor("#111827");
      doc.setFont("helvetica", "normal");
      doc.rect(20, y, 110, rowHeight);
      doc.rect(130, y, 60, rowHeight);
      doc.text(label, labelX + 2, y + 7);
      doc.text(String(value), valueX + 2, y + 7);
      y += rowHeight;
    };

    // ==== Title ====
    drawCenteredTitle("WESTWYN COUNTY", 18, 10);
    drawCenteredTitle("Cost Sheet", 13, 12);

    // ==== Customer Details ====
    drawSectionHeader("Customer Details");
    drawRow("Customer Name", customer.name || "-");
    drawRow("Contact Number", customer.mobile || "-");
    drawRow("Email Address", customer.email || "-");
    drawRow("Plot Number", customer.plotNo || "-");

    // ==== Plot Details ====
    drawSectionHeader("Plot Details");
    drawRow("Area (Sq.Yard)", plot.areaSqYd || 0);
    drawRow("Area (Sq.Feet)", plot.areaSqFt || 0);
    drawRow("Basic Selling Price (Sq.Yard)", plot.rate);
    drawRow(`PLC Amount (${charges.plcPerYd} per Sq.Yard)`, totals.plcAmount);
    drawRow("Plot Amount", totals.plotAmount);
    drawRow(
      "Total Plot Charges (Plot Amount + PLC)",
      totals.plotAmount + totals.plcAmount
    );

    // ==== Additional Charges ====
    drawSectionHeader("Additional Charges");
    drawRow(
      `Development Charges (${charges.devPerYd} per Sq.Yard)`,
      totals.devAmount
    );
    drawRow("Maintenance Charges", charges.maintenance);
    drawRow("Legal Fees", charges.legal);
    drawRow("Total Additional Charges", totals.addCharges);

    // ==== Total Amount ====
    y += 5; // spacing
    doc.setFillColor("#D1FAE5"); // light green
    doc.setDrawColor("#10B981"); // green border
    doc.rect(20, y, 170, rowHeight, "F"); // full-width styled row

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#065F46"); // dark green
    doc.text("Total Payable Amount:", labelX + 2, y + 7);
    doc.text(String(totals.totalPayable), valueX + 2, y + 7);
    y += rowHeight;

    // ==== Footer ====
    y += 8;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor("#000");
    doc.text(
      "Note: Stamp Duty is 5.9% for males and 4.9% for females",
      labelX,
      y
    );

    // ==== Styled & Centered Footer ====
    y += 10;
    const pageWidth = doc.internal.pageSize.getWidth();
    const centerX = pageWidth / 2;

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("Black"); // green
    doc.text("Thank you for choosing Westwyn County.", centerX, y, {
      align: "center",
    });

    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor("#000");

    const dateStr = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    doc.text(`Document generated on: ${dateStr}`, centerX, y, {
      align: "center",
    });

    doc.save(`Westwyn_Cost_Sheet_${customer.plotNo || "Plot"}.pdf`);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-indigo-700 text-center mb-12 drop-shadow">
        WESTWYN COUNTY - Cost Sheet
      </h1>

      <Section title="Customer Details">
        <Input
          name="name"
          label="Customer Name"
          type="text"
          value={customer.name}
          onChange={handleChange(setCustomer)}
          error={!!errors.name}
          errorMessage={errors.name}
        />
        <Input
          name="email"
          label="Email Address"
          type="email"
          value={customer.email}
          onChange={handleChange(setCustomer)}
          error={!!errors.email}
          errorMessage={errors.email}
        />
        <Input
          name="mobile"
          label="Contact Number"
          type="tel"
          pattern="[0-9]*"
          inputMode="numeric"
          value={customer.mobile}
          onChange={(e) => {
            const digitsOnly = e.target.value.replace(/\D/g, "");
            setCustomer((prev) => ({ ...prev, mobile: digitsOnly }));
          }}
          error={!!errors.mobile}
          errorMessage={errors.mobile}
        />
        <Input
          name="plotNo"
          label="Plot Number"
          type="text"
          value={customer.plotNo}
          onChange={handleChange(setCustomer)}
        />
      </Section>

      <Section title="Plot Details">
        <Input
          name="areaSqYd"
          label="Area (Sq.Yard)"
          type="number"
          step="any"
          value={plot.areaSqYd}
          onChange={handleChange(setPlot)}
          error={!!plotErrors.areaSqYd}
          errorMessage={plotErrors.areaSqYd}
        />
        <Input
          name="areaSqFt"
          label="Area (Sq.Feet)"
          type="number"
          step="any"
          value={plot.areaSqFt}
          onChange={handleChange(setPlot)}
        />

        <Input
          name="rate"
          label="Basic Selling Price (₹/Sq.Yard)"
          value={plot.rate}
          onChange={handleChange(setPlot)}
        />
        <Readonly label="Plot Amount" value={totals.plotAmount} />
        <Input
          name="plcPerYd"
          label="PLC Charge (₹/Sq.Yard)"
          value={charges.plcPerYd}
          onChange={handleChange(setCharges)}
        />
        <Readonly label="PLC Amount" value={totals.plcAmount} />
        <Readonly
          label="Total Plot Charges (Plot Amount + PLC Amount)"
          value={totals.plotAmount + totals.plcAmount}
        />
      </Section>

      <Section title="Additional Charges">
        <Input
          name="devPerYd"
          label="Development Charge (₹/Sq.Yard)"
          value={charges.devPerYd}
          onChange={handleChange(setCharges)}
        />
        <Readonly label="Development Amount" value={totals.devAmount} />

        <Input
          name="maintenance"
          label="Maintenance Charges"
          value={charges.maintenance}
          onChange={handleChange(setCharges)}
        />
        <Input
          name="legal"
          label="Legal Fees"
          value={charges.legal}
          onChange={handleChange(setCharges)}
        />
        <Readonly label="Total Additional Charges" value={totals.addCharges} />
      </Section>

      <div className="text-center mt-12">
        <p className="text-2xl font-bold text-green-700 mb-6">
          Total Amount Payable: ₹{totals.totalPayable.toLocaleString()}
        </p>
        <button
          onClick={downloadPDF}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-2">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{children}</div>
    </section>
  );
}

function Input({
  name,
  label,
  value,
  onChange,
  type = "text",
  step,
  inputMode,
  pattern,
  error,
  errorMessage,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium mb-1 text-gray-600"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        step={step}
        pattern={pattern}
        inputMode={inputMode}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        placeholder={label}
      />
      {error && <p className="text-sm text-red-600 mt-1">{errorMessage}</p>}
    </div>
  );
}

function Readonly({ label, value }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-600">
        {label}
      </label>
      <input
        type="text"
        readOnly
        value={`₹${value.toLocaleString()}`}
        className="w-full px-4 py-2 border bg-gray-100 rounded-lg text-gray-700 shadow-sm"
      />
    </div>
  );
}
