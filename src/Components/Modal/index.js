import React from "react";
import PropTypes from "prop-types";
import { Content } from "Components";
import { useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import Header from "./header";
import Footer from "./footer";
import { getSizeByParam } from "./rules";
import styles, { Modal } from "./styles";

const ModalComponent = ({
  size,
  visible,
  children,
  styleModal,
  styleContent,
  closable,
  modalProps,
  ...otherProps
}) => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <Modal
      visible={visible}
      centered
      closeIcon={<FeatherIcon style={styles.closeIcon} icon="x" />}
      title={<Header {...otherProps} />}
      footer={<Footer {...otherProps} />}
      onCancel={() => handleBack()}
      width={getSizeByParam(size).width}
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
