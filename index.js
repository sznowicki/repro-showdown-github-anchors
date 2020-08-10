const showdown = require('showdown');
const { readFileSync } = require('fs');

const main = () => {
    const converter = new showdown.Converter({
        ghCompatibleHeaderId: true,
        strikethrough: true,
        tables: true,
        tasklists: true,
        ghMentions: true,
        encodeEmails: false,
        metadata: true
    });
    converter.setFlavor('github');

    converter.setOption('simpleLineBreaks', false);
    const md = readFileSync('./test.md').toString();
    const html = converter.makeHtml(md);

    console.log(html);
};

main();
