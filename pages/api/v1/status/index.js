function status(request, response) {
  response.status(200).json({ situation: "Função de Status" });
}

export default status;
