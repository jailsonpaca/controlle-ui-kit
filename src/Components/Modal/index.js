import React from "react";
import PropTypes from "prop-types";
import { Content, Text } from "Components";
import { useNavigate } from "react-router-dom";
import { Modal, Footer, Divider } from "./styles";
import { getSizeByParam } from "./rules";
import { ButtonSave, ButtonSecondary } from "./Buttons";

const ModalComponent = ({
  visible,
  titleHeader,
  children,
  onSecondary,
  showDividerHeader,
  showSecondary,
  showSave,
  showFooter,
  showHeader,
  styleModal,
  styleFooter,
  styleHeader,
  styleContent,
  styleButtonSave,
  styleButtonSecondary,
  typeButtonSave,
  typeButtonSecondary,
  titleButtonSave,
  titleButtonSecondary,
  closable,
  modalProps,
  ...otherProps
}) => {
  const navigate = useNavigate();
  const handleSecondary = () => {
    if (onSecondary) {
      return onSecondary();
    }

    return navigate(-1);
  };

  const handleBack = () => navigate(-1);

  return (
    <Modal
      visible={visible}
      centered
      footer={
        showFooter && [
          <Footer key={1} style={styleFooter}>
            {showSave && (
              <ButtonSave
                key={1}
                styleButtonSave={styleButtonSave}
                typeButtonSave={typeButtonSave}
                titleButtonSave={titleButtonSave}
                {...otherProps}
              />
            )}
            {showSecondary && (
              <ButtonSecondary
                key={2}
                onSecondary={handleSecondary}
                styleButtonSecondary={styleButtonSecondary}
                typeButtonSecondary={typeButtonSecondary}
                titleButtonSecondary={titleButtonSecondary}
                {...otherProps}
              />
            )}
          </Footer>,
        ]
      }
      title={
        showHeader && (
          <div style={styleHeader}>
            <Text.Bold size={20}>{titleHeader}</Text.Bold>
            {showDividerHeader && <Divider />}
          </div>
        )
      }
      onCancel={() => handleBack()}
      width={getSizeByParam(otherProps).width}
      style={styleModal}
      closable={closable}
      maskTransitionName=""
      {...modalProps}
    >
      <Content style={styleContent}>{children}</Content>
    </Modal>
  );
};

ModalComponent.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  typeButtonSave: PropTypes.string,
  typeButtonSecondary: PropTypes.string,
  titleHeader: PropTypes.string,
  titleButtonSave: PropTypes.string,
  titleButtonSecondary: PropTypes.string,
  showDividerHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
  showSecondary: PropTypes.bool,
  showSave: PropTypes.bool,
  showHeader: PropTypes.bool,
  onSave: PropTypes.func,
  onSecondary: PropTypes.func,
  closable: PropTypes.bool,
  history: PropTypes.objectOf(PropTypes.func),
  styleModal: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  styleContent: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  styleHeader: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  styleFooter: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  styleButtonSave: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  styleButtonSecondary: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

ModalComponent.defaultProps = {
  visible: true,
  size: "small",
  typeButtonSave: "add",
  typeButtonSecondary: "link",
  titleButtonSave: "Salvar",
  titleButtonSecondary: "Cancelar",
  showFooter: true,
  showSecondary: false,
  showSave: true,
  showHeader: true,
  closable: true,
  styleModal: {},
  styleContent: {},
  styleHeader: {},
  styleFooter: {},
  styleButtonSave: {},
  styleButtonSecondary: {},
  onSecondary: null,
};

export default ModalComponent;
