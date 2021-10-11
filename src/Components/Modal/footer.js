import { ButtonSave, ButtonSecondary } from "./Buttons";
import { Footer } from "./styles";

export const FooterComponent = ({
  showFooter,
  styleFooter,
  showSave,
  typeButtonSave,
  titleButtonSave,
  styleButtonSave,
  showSecondary,
  typeButtonSecondary,
  titleButtonSecondary,
  styleButtonSecondary,
  onSecondary,
  ...otherProps
}) =>
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
          onSecondary={() => onSecondary()}
          styleButtonSecondary={styleButtonSecondary}
          typeButtonSecondary={typeButtonSecondary}
          titleButtonSecondary={titleButtonSecondary}
          {...otherProps}
        />
      )}
    </Footer>,
  ];

export default FooterComponent;
