var data = [
    {
      id: "NS39"
      contacts: [
        {desc: "DD", ext: "(22) 2753-3922", int: "8969", email: "svc_ns39dd@halliburton.com" },
        {desc: "LWD", ext: "(22) 2753-3914", int: "8924", email: "svc_ns39lwd@halliburton.com" },
        {desc: "SDL", ext: "(22) 2753-3918", int: "8886", email: "FSBR.MAC.RIG.NS47SDL@halliburton.com" },
        {desc: "CPM", ext: "(22) 2753-3903", int: "9607", email: "BR_MERO1_CPM_NS39L@halliburton.com" },
        {desc: "Fiscal", ext: "", int: "8821", email: "sondans39@petrobras.com.br" },
        {desc: "Geólogo", ext: "", int: "8942", email: "geologosondans39@petrobras.com.br" },
        {desc: "Rigfloor", ext: "", int: "8895", email: "driller.myk@deepwater.com" },
      ],
    }
];

export default function handler(req, res) {
  const date = new Date(Date.now());
  res.status(200).json({date: date, data})
}
