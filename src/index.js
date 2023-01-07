const express = require('express');

const fs = require('fs');

const { checkPassword } = require('../middlewares/checkPassword');

const { checkEmail } = require('../middlewares/checkEmail');

const { checkToken } = require('../middlewares/checkToken');

const { checkName } = require('../middlewares/checkName');

const { checkAge } = require('../middlewares/checkAge');

const { checkTalk } = require('../middlewares/checkTalk');

const pathOfTalker = 'src/talker.json';

const app = express();

app.use(express.json());

app.get('/talker', async (_req, res) => {
  const data = JSON.parse(fs.readFileSync(pathOfTalker, 'utf-8'));
  res.status(200).json(data);
});
// monitoria danielle //
app.get('/talker', async (_req, res) => {
    const db = JSON.parse(fs.readFileSync(pathOfTalker, 'utf-8'));
  res.status(200).json(db);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync(pathOfTalker, 'utf-8'));
  const talker = data.find((e) => e.id === Number(id));
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(talker);
});

app.post('/login', checkEmail, checkPassword, (_req, res) => {
  const generateToken = Math.floor(1000000000000000 + Math.random() * 9000000000000000)
  .toString(10);
res.status(200).json({ token: `${generateToken}` });
});

// https://stackoverflow.com/questions/8532406/create-a-random-token-in-javascript-based-on-user-details#8532436//
app.post('/talker', checkToken, checkName, checkAge, checkTalk, (req, res) => {
    const { name, age, talk } = req.body;
    const allTalkers = JSON.parse(fs.readFileSync(pathOfTalker));
    const newTalk = { id: allTalkers.length + 1, name, age, talk };
    allTalkers.push(newTalk);
    fs.writeFileSync(pathOfTalker, JSON.stringify(allTalkers));
    res.status(201).json(newTalk);
  });

app.put('/talker/:id', checkToken, checkName, checkAge, checkTalk, (req, res) => {
    const { id } = req.params;
    const checkId = Number(id);
    const updatedTalkers = JSON.parse(fs.readFileSync(pathOfTalker));
    const upInfo = { id: checkId, ...req.body };
    updatedTalkers.push(upInfo);
    fs.writeFileSync(pathOfTalker, JSON.stringify(updatedTalkers));
    updatedTalkers.filter((event) => event.id !== checkId);
     res.status(200).json(upInfo);
  });
// monitoria daniele //
  app.delete('/talker/:id', checkToken, (req, res) => {
  const { id } = req.params;
  const checkTalkers = JSON.parse(fs.readFileSync(pathOfTalker));
  const target = checkTalkers.filter((e) => e.id !== Number(id));
  fs.writeFileSync(pathOfTalker, JSON.stringify(target));
  res.status(204).json();
});

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
