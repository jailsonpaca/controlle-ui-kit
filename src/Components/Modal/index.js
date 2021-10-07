import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Divider } from 'antd';
import { Content, Text } from 'Components';
import { useNavigate } from 'react-router-dom';
import styles from './styles';
import { ButtonSave, ButtonCancel } from './Buttons';

const ModalComponent = ({
    visible,
    width,
    titleHeader,
    children,
    onCancel,
    showDividerHeader,
    showCancel,
    showSave,
    showFooter,
    showHeader,
    styleModal,
    styleFooter,
    styleHeader,
    styleContent,
    styleButtonSave,
    styleButtonCancel,
    typeButtonSave,
    typeButtonCancel,
    titleButtonSave,
    titleButtonCancel,
    closable,
    modalProps,
    ...otherProps
}) => {
    const navigate = useNavigate();
    const handleCancel = () => {
        if (onCancel) {
            return onCancel();
        }

        return navigate(-1);
    };

    return (
        <Modal
            visible={visible}
            centered
            footer={
                showFooter && [
                    <div key={1} style={{ ...styles.footer, ...styleFooter }}>
                        {showSave && (
                            <ButtonSave
                                key={1}
                                styleButtonSave={styleButtonSave}
                                typeButtonSave={typeButtonSave}
                                titleButtonSave={titleButtonSave}
                                {...otherProps}
                            />
                        )}

                        {showCancel && (
                            <ButtonCancel
                                key={2}
                                onCancel={handleCancel}
                                styleButtonCancel={styleButtonCancel}
                                typeButtonCancel={typeButtonCancel}
                                titleButtonCancel={titleButtonCancel}
                                {...otherProps}
                            />
                        )}
                    </div>,
                ]
            }
            title={
                showHeader && (
                    <div style={styleHeader}>
                        <Text.Bold size={20}>{titleHeader}</Text.Bold>
                        {showDividerHeader && <Divider style={{ marginTop: 15 }} />}
                    </div>
                )
            }
            onCancel={handleCancel}
            width={width}
            style={styleModal}
            closable={closable}
            maskTransitionName=""
            {...modalProps}
        >
            <Content style={{ ...styles.content, ...styleContent }}>{children}</Content>
        </Modal>
    );
};

ModalComponent.propTypes = {
    visible: PropTypes.bool,
    children: PropTypes.node,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    typeButtonSave: PropTypes.string,
    typeButtonCancel: PropTypes.string,
    titleHeader: PropTypes.string,
    titleButtonSave: PropTypes.string,
    titleButtonCancel: PropTypes.string,
    showDividerHeader: PropTypes.bool,
    showFooter: PropTypes.bool,
    showCancel: PropTypes.bool,
    showSave: PropTypes.bool,
    showHeader: PropTypes.bool,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    closable: PropTypes.bool,
    history: PropTypes.objectOf(PropTypes.func),
    styleModal: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    styleContent: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    styleHeader: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    styleFooter: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    styleButtonSave: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    styleButtonCancel: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

ModalComponent.defaultProps = {
    visible: true,
    width: 483,
    typeButtonSave: 'add',
    typeButtonCancel: 'link',
    titleButtonSave: 'Salvar',
    titleButtonCancel: 'Cancelar',
    showFooter: true,
    showCancel: true,
    showSave: true,
    showHeader: true,
    closable: true,
    styleModal: {},
    styleContent: {},
    styleHeader: {},
    styleFooter: {},
    styleButtonSave: {},
    styleButtonCancel: {},
    onCancel: null,
};

export default ModalComponent;
