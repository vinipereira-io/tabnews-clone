function status(request, response) {
  response.status(200).json({ status_message: "tá tudo ok" });
}

export default status;
