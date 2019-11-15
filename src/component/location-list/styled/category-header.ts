import styled from '@emotion/styled';
import { Theme } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';

export interface IStyledSectionHeaderProps {
  theme: Theme,
}

export const StyledSectionHeader = styled(
  'div',
  {
    shouldForwardProp: (name) => name !== 'theme',
  }
)<IStyledSectionHeaderProps>(
  ({ theme }) => ({
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: theme.spacing(2),
    backgroundColor: blue[200],
    borderBottom: `1px solid ${grey[600]}`,
  }),
);
