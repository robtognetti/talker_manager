function checkWatchedAt(req, res) {
    const { talk } = req.body;

    const validate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
    if (!(validate.test(talk.watchedAt))) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    if (!talk.watchedAt) {
      return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
  }

  function checkRate(req, res) {
    const checkRatings = [1, 2, 3, 4, 5];
    const { talk } = req.body;

    // Auxilio da monitoria Daniele //
    if (talk.rate === undefined) {
      return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }
    if (!(checkRatings.includes(talk.rate)) || talk < 1) {
      return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
  }

  function checkTalk(req, res, next) {
    const { talk } = req.body;

   if (!talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
   if (!talk.watchedAt) {
    return res.status(400)
    .json({ message: 'O campo "watchedAt" é obrigatório' }); 
  }
    checkWatchedAt(req, res);
    checkRate(req, res);
    next();
  }

  module.exports = { checkTalk };
