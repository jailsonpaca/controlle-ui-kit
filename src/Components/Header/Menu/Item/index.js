import React from 'react';
import Text from 'Components/Text';
import COLORS from 'styles/colors';
import { isResourceAllowed } from 'utils/isResourceAllowed';
import { getBlockedPlan } from 'utils/getBlockedPlan';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'store/modules/auth/actions';
import FeatherIcon from 'feather-icons-react';
import styles, { MenuItem, TagMenu } from './styles';

// const Disabled = () => (
//     <Text.Regular size={13} color={COLORS.darkBlueGrey} style={{ marginLeft: '3px' }}>
//         <i>(Desativado)</i>
//     </Text.Regular>
// );

const Item = ({
    id,
    title,
    disabled = false,
    logoutItem = false,
    onClick: onShowDrawer,
    contact,
    financial,
    financialRight,
    solutions,
    solutionsRight,
    reportLeft,
    reportMid,
    reportRight,
    colorGray,
    isSubMenuConfig,
    hasChevronIcon,
    marginLeft,
    isFirst,
    ...otherProps
}) => {
    const dispatch = useDispatch();
    const { currentPlan } = useSelector(state => state.plans);
    const navigate = useNavigate();
    const location = useLocation();
    const pathURL = location.pathname.replace('/', '');
    const selected = id === pathURL;

    delete otherProps.eventKey;
    delete otherProps.warnKey;
    const allowed = isResourceAllowed(currentPlan, id);
    const blockedPlan = getBlockedPlan(currentPlan, id);

    function handleClick({ key }) {
        if (!isFirst) {
            if (key === 'sair') {
                dispatch(logoutUser());
                return navigate('login');
            }
            if (key === 'empresas-que-participo') {
                onShowDrawer();
                return null;
            }

            if (!allowed) {
                return navigate('meu-plano/assinatura');
            }

            return navigate(key);
        }

        return false;
    }

    function getColor() {
        if (colorGray || marginLeft) {
            return COLORS.blueGreyTwo;
        }

        return COLORS.text;
    }

    return (
        <MenuItem
            {...otherProps}
            eventKey={id || 'any'}
            key={id || 'any'}
            disabled={disabled}
            onClick={e => {
                handleClick(e);
            }}
            style={{
                ...styles.item,
                ...(marginLeft && styles.marginLeft),
            }}
            logoutItem={logoutItem}
            selected
            contact={contact}
            financial={financial}
            financialRight={financialRight}
            solutions={solutions}
            solutionsRight={solutionsRight}
            reportLeft={reportLeft}
            reportMid={reportMid}
            reportRight={reportRight}
            isSubMenuConfig={isSubMenuConfig}
            marginLeft={marginLeft}
            isFirst={isFirst}
        >
            <Link to={`./${id}`}>
                {selected ? <Text.Bold>{title}</Text.Bold> : <Text.Regular color={getColor()}>{title}</Text.Regular>}{' '}
            </Link>
            {!allowed && blockedPlan !== '' && (
                <TagMenu color={COLORS.orange} style={styles.tag}>
                    <Text.Bold size={9} color="#ff7947" style={{ minHeight: 15 }}>
                        {blockedPlan}
                    </Text.Bold>
                </TagMenu>
            )}

            {hasChevronIcon && <FeatherIcon icon="chevron-down" size={18} style={styles.icon} />}
            {/* {disabled && <Disabled />} */}
        </MenuItem>
    );
};

export default Item;
