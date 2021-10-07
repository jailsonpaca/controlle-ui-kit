import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import { ArrowDown } from 'assets/CustomIcons';
import { Text } from 'Components';
import { COLORS } from 'styles';
import styles from './styles';
import Item from './Item';

const ColumnsContent = ({ listConfig, onChange, filter, formatToSave }) => {
    const configs = filter(listConfig);

    return (
        <div style={styles.columnsOptions}>
            <Text.Bold size={15} color={COLORS.darkGrey}>
                Exibir na tela:
            </Text.Bold>
            <div style={{ marginTop: 5 }}>
                {configs &&
                    configs.map(item => (
                        <Item
                            key={item.key}
                            title={item.name}
                            defaultValue={item.show}
                            // checkedValue={type}
                            setValue={value => formatToSave({ [item.key]: value }, configs, onChange)}
                        />
                    ))}
            </div>
        </div>
    );
};

const DisplayColumns = ({ listConfig, onChange, filter, formatToSave }) => (
    <Popover
        content={
            <ColumnsContent listConfig={listConfig} onChange={onChange} filter={filter} formatToSave={formatToSave} />
        }
        title={false}
        trigger="hover"
        placement="bottom"
    >
        <ArrowDown style={styles.displayColumns} />
    </Popover>
);

const DisplayPropTypes = {
    listConfig: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.objectOf(PropTypes.any)]),
    onChange: PropTypes.func,
    filter: PropTypes.func,
    formatToSave: PropTypes.func,
};

ColumnsContent.propTypes = DisplayPropTypes;

DisplayColumns.propTypes = DisplayPropTypes;

export default DisplayColumns;
