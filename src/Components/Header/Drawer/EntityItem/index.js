/* eslint-disable react/prop-types */
import React from 'react';
import Text from 'Components/Text';

import { useSelector } from 'react-redux';
import { Container, Button, ButtonSelect } from './styles';

const EntityItem = ({ onPress }) => {
    const { entities } = useSelector(state => state.entities);
    const { currentEntityID } = useSelector(state => state.entities);

    return (
        <>
            {entities.map(entite => (
                <Container key={entite.id} select={entite.id === currentEntityID}>
                    <Text.Regular size={16}>{entite.name}</Text.Regular>

                    {entite.id === currentEntityID ? (
                        <ButtonSelect>
                            <span>Ativa</span>
                        </ButtonSelect>
                    ) : (
                        <Button onClick={() => onPress(entite.id)}>Acessar</Button>
                    )}
                </Container>
            ))}
        </>
    );
};

export default EntityItem;
