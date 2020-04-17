const uwufy = (input: string): string => {
    input = input.replace(/(?:l|r)/g, 'w');
    input = input.replace(/(?:L|R)/g, 'W');
    return input;
}
export = uwufy;