import { render, testA11y } from "@chakra-ui/test-utils"
import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "."

describe("<StatGroup />", () => {
  test("should renders correctly", () => {
    const { getByTestId } = render(
      <StatGroup data-testid="group">
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Clicked</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>,
    )
    expect(getByTestId("group")).toBeTruthy()
  })

  test("should passes a11y test", async () => {
    await testA11y(
      <StatGroup data-testid="group">
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </StatGroup>,
    )
  })
})
