const { translate } = require('@vitalets/google-translate-api');

let lang = 'en';

async function detectLanguage(text) {
  return translate(text, { to: 'en' })
    .then((res) => {
      return res.from.language.iso;
    })
    .catch((err) => {
      console.error(err);
    });
}

async function toEnglish(text) {
  return translate(text, { from: lang, to: 'en' })
    .then((res) => {
      console.log(res.text);
      console.log(res.from.language.iso);
      return res.text;
    })
    .catch((err) => {
      console.error(err);
    });
}

async function input(text) {
  lang = await detectLanguage(text);
  console.log('Detected language:', lang);
  return await toEnglish(text);
}

async function output(text) {
  return await translate(text, { from: 'en', to: lang });
}

module.exports = {
  input,
  output,
};
