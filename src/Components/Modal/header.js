import { Text } from "Components";
import { Divider } from "./styles";

const Header = ({ showHeader, titleHeader, styleHeader, showDividerHeader }) =>
  showHeader && (
    <div style={styleHeader}>
      <Text.Bold size={20}>{titleHeader}</Text.Bold>
      {showDividerHeader && <Divider />}
    </div>
  );
export default Header;
