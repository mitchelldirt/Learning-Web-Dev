function correctSentence(text: string): string {
    text = text.slice(0, 1).toUpperCase() + text.slice(1);
    if (text[text.length - 1] !== ".") {
        text = text + ".";
    }
    return text;
}