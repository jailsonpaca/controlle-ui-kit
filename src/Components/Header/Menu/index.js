/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ALLOWED_ROUTES } from 'utils';
import { getCurrentPlan } from 'store/modules/plans/actions';
import { Menu } from 'antd';
import COLORS from 'styles/colors';
import Text from 'Components/Text';
import FeatherIcon from 'feather-icons-react';
import styles, { Main, Right, ContainerFlex, SugestionReport } from './styles';
import SubMenuOptions from './SubMenu';
import MyAccount from './MyAccount';
import Notifications from './Notifications';
import Item from './Item';

const MenuContainer = ({ onShowDrawer, user }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { currentPlan } = useSelector(state => state.plans);
    const isPlanValid = !!currentPlan && currentPlan.plan && currentPlan.plan.status !== 0 && currentPlan !== 'EXPIRED';

    useEffect(() => {
        if (ALLOWED_ROUTES.indexOf(location.pathname.replace('/', '')) === -1) dispatch(getCurrentPlan());
    }, [location.pathname]);

    const currentMenu = 'visaogeral';

    return (
        <Main isPlanValid={isPlanValid}>
            {isPlanValid && (
                <>
                    <div>
                        <Menu mode="horizontal" style={styles.menu} selectedKeys={[currentMenu]}>
                            <Menu.Item style={styles.menuItem} key="/dashboard">
                                <Link to="dashboard" style={styles.buttonOverView}>
                                    <Text.Bold size={14} color={COLORS.white}>
                                        Visão geral
                                    </Text.Bold>
                                </Link>
                            </Menu.Item>
                            <SubMenuOptions id="transactions" title="Financeiro" size={14} isSubMenuTransactions>
                                <ContainerFlex>
                                    <div>
                                        <Item
                                            id=""
                                            title={<Text.Bold size={15}>Lançamentos</Text.Bold>}
                                            financial
                                            isFirst
                                            disabled
                                        />
                                        <Item id="lancamentos" title="Todos os lançamentos" financial />
                                        <Item id="contas-a-pagar" title="Contas a pagar" disabled financial />
                                        <Item id="contas-a-receber" title="Contas a receber" disabled financial />
                                        <Item id="conciliacoes-bancarias" title="Conciliação bancária" financial />
                                    </div>
                                    <div>
                                        <Item
                                            id=""
                                            title={<Text.Bold size={15}>Configurações</Text.Bold>}
                                            financialRight
                                            isFirst
                                            disabled
                                        />
                                        <Item id="cartoes-de-credito" title="Cartões de crédito" financialRight />
                                        <Item id="contas" title="Contas e carteiras" financialRight />
                                        <Item
                                            id="configuracoes/planos-de-contas"
                                            title="Plano de contas/categorias"
                                            financialRight
                                        />
                                    </div>
                                </ContainerFlex>
                            </SubMenuOptions>

                            <SubMenuOptions id="sub-contatos" title="Contatos" size={14} isSubMenuContacts>
                                <Item id="contatos" title="Todos os contatos" contact />
                                <Item id="clientes" title="Clientes" disabled contact />
                                <Item id="fornecedores" title="Fornecedores" disabled contact />
                                <Item id="outros" title="Outros" disabled contact />
                            </SubMenuOptions>

                            <SubMenuOptions id="relatorios" title="Relatórios" size={14} isSubMenuReport>
                                <ContainerFlex>
                                    <div>
                                        <Item
                                            id=""
                                            title={<Text.Bold size={15}>Entradas e saídas</Text.Bold>}
                                            reportLeft
                                            isFirst
                                            disabled
                                        />
                                        <Item id="" title="Análise geral" reportLeft />
                                        <Item id="" title="Por categorias" reportLeft />
                                        <Item id="" title="Por conta e cartões" reportLeft />
                                        <Item id="" title="Por centro de custo" reportLeft />
                                        <Item id="" title="Por fornecedores" reportLeft />
                                        <Item id="" title="Por clientes" reportLeft />
                                        {/* <Item id="relatorios/fluxo-de-caixa" title="Fluxo de caixa" disabled />
                                        <Item id="relatorios/geral" title="Despesas x receitas" disabled />
                                        <Item id="relatorios/planos-de-contas" title="Categorias" disabled />
                                        <Item id="relatorios/contas" title="Contas" disabled />
                                        <Item id="relatorios/personalizado" title="Personalizado" disabled /> */}
                                    </div>

                                    <div>
                                        <Item
                                            id=""
                                            title={<Text.Bold size={15}>Fluxo de caixa</Text.Bold>}
                                            isFirst
                                            reportMid
                                            disabled
                                        />
                                        <Item id="" title="Por conta" reportMid />
                                        <Item id="" title="Por centro de custo" reportMid />
                                        <Item id="" title="Previsto x realizado" reportMid />
                                    </div>

                                    <div>
                                        <Item
                                            id=""
                                            title={<Text.Bold size={15}>Outros relatórios</Text.Bold>}
                                            isFirst
                                            reportRight
                                            disabled
                                        />
                                        <Item id="" title="Personalizado" reportRight />
                                        <Item
                                            id=""
                                            title="Demonstrativo de resultados[em breve]"
                                            reportRight
                                            colorGray
                                        />
                                    </div>
                                </ContainerFlex>
                                <SugestionReport>
                                    <Text.Regular size={14} color={COLORS.blueGrey}>
                                        Sentiu falta de algum relatório?{' '}
                                        <a
                                            href="#dadsa"
                                            style={{
                                                color: '#0054ff',
                                            }}
                                        >
                                            Faça uma sugestão.
                                        </a>
                                    </Text.Regular>
                                </SugestionReport>
                            </SubMenuOptions>

                            <SubMenuOptions id="maiskey" title="Mais" size={14} isSubMenuMore>
                                <ContainerFlex>
                                    <div>
                                        <Item
                                            id=""
                                            title={<Text.Bold size={15}>Soluções</Text.Bold>}
                                            isFirst
                                            solutions
                                            disabled
                                        />
                                        <Item id="notas-fiscais" title="Nota fiscal de serviço" solutions />
                                        <Item id="" title="Cobranças" solutions />
                                        <Item id="propostas" title="Propostas comerciais" solutions colorGray />
                                        <Item id="metas" title="Metas" solutions />
                                        <Item id="" title="Auditoria" solutions />
                                        {/* <Item id="emissao-de-boletos" title="Emissão de boletos" disabled /> */}
                                    </div>

                                    <div>
                                        <Item
                                            id=""
                                            title={<Text.Bold size={15}>Ferramentas</Text.Bold>}
                                            isFirst
                                            solutionsRight
                                            disabled
                                        />
                                        <Item id="agenda" title="Agenda" disabled solutionsRight />
                                        <Item
                                            id="conversor-de-moedas"
                                            title="Conversor de moedas"
                                            disabled
                                            solutionsRight
                                        />
                                    </div>
                                </ContainerFlex>
                            </SubMenuOptions>
                        </Menu>
                    </div>
                </>
            )}
            <Right isPlanValid={isPlanValid}>
                {isPlanValid ? (
                    <Menu mode="horizontal" style={styles.userMenu} selectedKeys={[currentMenu]}>
                        <Notifications />
                        <SubMenuOptions
                            bold={false}
                            id="configuracoes"
                            title={<FeatherIcon icon="settings" size={20} />}
                            icon={false}
                            size={0}
                            popupOffset={[-34, 0]}
                            isSubMenuConfig
                        >
                            <Item id="configuracoes/minha-empresa" title="Minha empresa" isSubMenuConfig />
                            <Item id="configuracoes/meu-plano" title="Meu plano" isSubMenuConfig />
                            <Item id="configuracoes/usuarios" title="Usuários" isSubMenuConfig />
                            <Item id="" title="Financeiro" disabled isSubMenuConfig hasChevronIcon isFirst />
                            <Item id="configuracoes/preferencias" title="Preferências" marginLeft />
                            <Item id="configuracoes/planos-de-contas" title="Planos de contas" marginLeft />
                            <Item id="contas" title="Contas e carteiras" marginLeft />
                            <Item id="cartoes-de-credito" title="Cartões de crédito" marginLeft />
                            <Item id="configuracoes/centros-de-custos" title="Centros de custos" marginLeft />
                            <Item id="configuracoes/tags" title="Tags" marginLeft />
                            <Item id="configuracoes/notificacoes" title="Notificações" isSubMenuConfig />
                            <Item
                                id="apresentacao-nota-fiscal/configuracao"
                                title="Configurações Nota fiscal"
                                isSubMenuConfig
                            />
                            <Item id="configuracoes/cobrancas" title="Cobranças" isSubMenuConfig />
                        </SubMenuOptions>
                        <MyAccount onShowDrawer={onShowDrawer} user={user} />
                    </Menu>
                ) : (
                    <Menu mode="horizontal" style={styles.userMenu} selectedKeys={[currentMenu]}>
                        <MyAccount onShowDrawer={onShowDrawer} user={user} />
                    </Menu>
                )}
            </Right>
        </Main>
    );
};

export default MenuContainer;
