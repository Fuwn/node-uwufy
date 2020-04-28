const uwufy = (input: string): string => {
    input = input.replace(/(?:l|r)/g, 'w');
    input = input.replace(/(?:L|R)/g, 'W');
    input = input.replace(/!+/g, ` >w< `);
    let f = Math.random() < 0.25
    if (f) {
        let c = input.charAt(0)
        input = c + '-' + input
    }
    return input;
}
export = uwufy;