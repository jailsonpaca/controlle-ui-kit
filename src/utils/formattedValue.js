const THOUSANDS = '.';
const DECIMAL = ',';
const DECIMALS = 2;
const DEFAULT_NO_VALUE = '-';

const getFormattedValue = (value, prefix = 'R$', hideValues = false) => {
    if (value || value === 0) {
        let mask = '';

        if (hideValues) {
            const realPrefix = !prefix && prefix.length === 0 ? '' : `${prefix} `;

            return `${realPrefix}___`;
        }

        const isNegative = value < 0;
        const splitNumbers = value
            .toString()
            .match(/\d+/g)
            .join([])
            .padStart(DECIMALS + 1, '0')
            .split('')
            .reverse();

        splitNumbers.forEach((item, index) => {
            if (index === DECIMALS) {
                mask = DECIMAL + mask;
            }

            if (index > DECIMALS + 1 && (index - 2) % (DECIMALS + 1) === 0) {
                mask = THOUSANDS + mask;
            }

            mask = item + mask;
        });
        const prefixValue = isNegative ? '-' : '';

        const realPrefix = !prefix && prefix.length === 0 ? '' : `${prefix} `;
        return realPrefix + prefixValue + mask;
    }

    return DEFAULT_NO_VALUE;
};

export default getFormattedValue;
