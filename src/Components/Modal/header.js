import { Text } from "Components";
import styles, { Divider } from "./styles";

const Header = ({ showHeader, titleHeader, styleHeader, showDividerHeader }) =>
  showHeader && (
    <div style={styleHeader}>
      <Text.Bold style={styles.title} size={20}>
        {titleHeader}
      </Text.Bold>
      {showDividerHeader && <Divider />}
    </div>
  );
export default Header;
