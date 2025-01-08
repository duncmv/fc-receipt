import PDFDocument from 'pdfkit';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, amount, date } = req.body;

    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=Receipt_${name}.pdf`);

    doc.fontSize(20).text('Investment Receipt', { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`Name: ${name}`);
    doc.text(`Amount Invested: UGX ${amount}`);
    doc.text(`Date of Investment: ${new Date(date).toDateString()}`);
    doc.moveDown();
    doc.text('Thank you for your investment!', { align: 'center' });

    doc.pipe(res);
    doc.end();
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
