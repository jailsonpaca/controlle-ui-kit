export default function formattedValueTable(num) {
    const value = num
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return `R$ ${value}`;
}
