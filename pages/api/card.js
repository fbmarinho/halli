export default () => {
  return JSON.Stringify({
    date: new Date(Date.now()),
    card: {
      subject: "EPI inadequado",
      observation: "Observei operador sem luvas adequadas para o trabalho",
      action: "Alertei ao mesmo que providenciou as luvas"
    }
  });
}
