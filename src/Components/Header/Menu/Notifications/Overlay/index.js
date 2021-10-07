/* eslint-disable react/prop-types */
import React from 'react';
import { Text, Button } from 'Components';
import styles, { Title } from './styles';
import Item from './Item';

const item = [
    {
        title: 'voce tem 3 contas atrasadas',
        data: '4 de janeiro',
    },
    {
        title: 'Seu relatório está pronto',
        data: 'Ontem',
    },
    {
        title: 'Exportação concluida',
        data: '4 horas atrás',
    },
];

const OverlayNotifications = ({ ...otherProps }) => {
    delete otherProps.eventKey;
    delete otherProps.warnKey;
    return (
        <>
            <Title>
                <Text.Bold size={15}>Notificações</Text.Bold>
            </Title>
            {item.map(not => (
                <div style={styles.borderBottom}>
                    <Item item={not} />
                </div>
            ))}
            <Title>
                <Button type="link" style={{ padding: 0 }}>
                    <Text.Regular size={15} color="#0054ff">
                        Ver mensagens antigas
                    </Text.Regular>
                </Button>
            </Title>
        </>
    );
};
export default OverlayNotifications;
