import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, Search as SearchField, Notification } from 'Components';
import DisplayColumns from './DisplayColumns';
import { Container, Records, OptionsHeader, SearchContainer, TableContainer } from './styles';
import Option from './Option';

const TableHeader = ({
    useRecords,
    useTitle,
    records,
    descriptionRecords,
    useSearchField,
    filterRecords,
    cleanCacheFilter,
    errorFilter,
    useOptions,
    handlePressExport,
    handlePressPrint,
    lengthData,
    // handlePressDisplay,
    displayConfig,
    useExport,
    usePrint,
    useDisplay,
    containerStyle,
    tableContainerStyle,
    children,
}) => {
    const { listConfig, onChange: onChangeDisplay, filter, formatToSave } = displayConfig;

    useEffect(() => {
        if (errorFilter) {
            Notification.error(errorFilter);

            cleanCacheFilter();
        }
    }, [errorFilter]);

    return (
        <>
            <Container style={containerStyle}>
                {(useRecords || useTitle) && (
                    <Records>
                        <Text.Bold size={18}>
                            {useRecords && records && `${records.length} `}
                            {descriptionRecords}
                        </Text.Bold>
                    </Records>
                )}
                {lengthData && (
                    <Records>
                        <Text.Bold size={18}>
                            {`${lengthData} `}
                            {descriptionRecords}
                        </Text.Bold>
                    </Records>
                )}
                {useSearchField && (
                    <SearchContainer>
                        <SearchField placeholder="Localizar" onChange={e => filterRecords(e)} />
                    </SearchContainer>
                )}
                {useOptions && (
                    <OptionsHeader>
                        {useExport && <Option title="Exportar" onClick={handlePressExport} />}
                        {usePrint && <Option title="Imprimir" onClick={handlePressPrint} />}
                        {useDisplay && (
                            <>
                                <Option title="Exibir" isShowColumns />
                                <DisplayColumns
                                    listConfig={listConfig}
                                    onChange={onChangeDisplay}
                                    filter={filter}
                                    formatToSave={formatToSave}
                                />
                            </>
                        )}
                    </OptionsHeader>
                )}
            </Container>
            <TableContainer style={tableContainerStyle}>{children}</TableContainer>
        </>
    );
};

TableHeader.propTypes = {
    records: PropTypes.arrayOf(PropTypes.any),
    descriptionRecords: PropTypes.string,
    filterRecords: PropTypes.func,
    useSearchField: PropTypes.bool,
    useTitle: PropTypes.bool,
    useRecords: PropTypes.bool,
    useOptions: PropTypes.bool,
    handlePressExport: PropTypes.func,
    handlePressPrint: PropTypes.func,
    // handlePressDisplay: PropTypes.func,
    displayConfig: PropTypes.shape({
        listConfig: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.objectOf(PropTypes.any)]),
        onChange: PropTypes.func,
        filter: PropTypes.func,
        formatToSave: PropTypes.func,
    }),
    cleanCacheFilter: PropTypes.func,
    useExport: PropTypes.bool,
    usePrint: PropTypes.bool,
    useDisplay: PropTypes.bool,
    children: PropTypes.element.isRequired,
    errorFilter: PropTypes.bool,
    containerStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    tableContainerStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

TableHeader.defaultProps = {
    records: [],
    descriptionRecords: '',
    filterRecords: () => null,
    handlePressExport: () => null,
    handlePressPrint: () => null,
    // handlePressDisplay: () => null,
    cleanCacheFilter: () => null,
    useSearchField: true,
    useTitle: false,
    useRecords: true,
    useOptions: true,
    useExport: true,
    usePrint: true,
    useDisplay: true,
    displayConfig: {
        listConfig: [],
        onChange: () => null,
        filter: () => null,
        formatToSave: () => null,
    },
    errorFilter: false,
};

export default TableHeader;
