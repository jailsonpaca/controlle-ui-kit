import { Spinner as SpinnerIcon } from 'assets/CustomIcons';
import { COLORS } from 'styles';
import styled from 'styled-components';

export const Spinner = styled(SpinnerIcon)`
    width: 46px;
    height: 36px;
    color: ${COLORS.primary};
    @-ms-keyframes spin {
        from {
            -ms-transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(360deg);
        }
    }
    @-moz-keyframes spin {
        from {
            -moz-transform: rotate(0deg);
        }
        to {
            -moz-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    animation-name: spin;
    animation-duration: 900ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;
