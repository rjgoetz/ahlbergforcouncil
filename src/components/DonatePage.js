import React from 'react';
import styled from 'styled-components';
import Layout from 'Components/Layout';
import Section from 'Components/Section';
import Type from 'Components/Type';
import { Row, Column } from 'Components/Grid';

const StyledDiv = styled.div`
  background: ${(props) => props.theme.colors.ltGrey};
  padding: ${(props) => props.theme.rhythm()} 20px;
`;

const DonatePage = ({ children }) => {
  return (
    <Layout title="Donate">
      <Section>
        <Row>
          <Column sm={{ column: 10, offset: 1 }} md={{ column: 12, offset: 0 }}>
            <Row>
              <Column
                md={6}
                lg={5}
                css={`
                  margin-bottom: ${(props) => props.theme.rhythm()};
                `}
              >
                <Type el="h4">Donate</Type>
                <Type
                  el="h1"
                  css={`
                    margin-bottom: ${(props) => props.theme.rhythm(2)};
                  `}
                >
                  Thank you for donating.
                </Type>
                <Type>
                  By electing to donate, you agree to abide by the following
                  contribution rules.
                </Type>
                <Type
                  size="sm"
                  weight="bold"
                  css={`
                    margin-bottom: 0;
                  `}
                >
                  Contribution rules:
                </Type>
                <Type el="ol" size="sm">
                  <li>
                    I am a U.S. citizen or lawfully admitted permanent resident
                    (i.e., green card holder).
                  </li>
                  <li>
                    This contribution is made from my own funds, and funds are
                    not being provided to me by another person or entity for the
                    purpose of making this contribution.
                  </li>
                  <li>I am at least eighteen years old.</li>
                  <li>I am not a federal contractor.</li>
                  <li>
                    I am making this contribution with my own personal credit
                    card and not with a corporate or business credit card or a
                    card issued to another person.
                  </li>
                </Type>
                <Type
                  size="sm"
                  weight="bold"
                  css={`
                    margin-bottom: 0;
                  `}
                >
                  If you prefer to send us a check:
                </Type>
                <Type size="sm">
                  Please make checks payable to "Ahlberg For Council" and mail
                  to: 6825 Valley View Rd. Edina, MN 55439. Federal law requires
                  us to use our best efforts to collect and report the name,
                  mailing address, occupation, and name of employer of
                  individuals whose contributions exceed $200 in an election
                  cycle.
                </Type>
              </Column>
              <Column
                md={6}
                lg={{ column: 5, offset: 1 }}
                xl={{ column: 5, offset: 2 }}
              >
                <StyledDiv>{children}</StyledDiv>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </Layout>
  );
};

export default DonatePage;
