export default function handler(req, res) {
  const date = new Date(Date.now());
  res.status(200).json({
    date: new Date(Date.now()),
    card: {
      subject: "EPI inadequado",
      observation: "Observei operador sem luvas adequadas para o trabalho",
      action: "Alertei ao mesmo que providenciou as luvas"
    }});
}
