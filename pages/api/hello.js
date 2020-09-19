export default (req, res) => {
  res.status(200).json({ text: "hellooo", re: req.body.id });
};
