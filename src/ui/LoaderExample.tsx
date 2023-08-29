import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { colors, device, fontSize, radius } from "@/lib/theme";
import { Text } from "./Texts";
import { SquigglyArrow } from "../../public/icons/SquigglyArrow";

const labelVariants = {
  show: {
    display: "inline-block",
    y: "0px",
    color: "white",
    opacity: "1",
  },
  focus: {
    color: "#eb7084",
    opacity: 1,
  },
};

export const PenScript = styled.span`
  font-family: "Nanum-Pen-Script", cursive !important;
  font-size: ${fontSize[16]};
  transform: rotate(346deg);
  color: #eb7085;

  @media (max-width: 345px) {
    transform: rotate(350deg);
  }
`;

const Select = styled.select`
  background: #1d1f2a;
  width: 90px;
  height: 26px;
  padding: 5px 5px 5px 16px;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  color: white;
  font-size: ${fontSize[12]};
  border-radius: ${radius.sm};
  border: 1px solid transparent;
  outline: none;
  appearance: none;

  :focus {
    border: 1px solid #eb7085;
    outline: none;
    filter: none;
  }
`;

interface DemoLoaders {
  showInteractivityCue: boolean;
}

const DemoLoaders = styled.div<DemoLoaders>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  position: relative;
  pointer-events: ${({ showInteractivityCue }) =>
    showInteractivityCue ? "auto" : "none"};
`;

const Label = styled(Text)`
  font-size: ${fontSize[10]};
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  font-weight: 500;
  color: white;
  letter-spacing: 1px;
`;

const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const FlexInputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
`;
const FlexLoadersPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  align-items: center;
  overflow: hidden;
  min-height: 40px;
`;

export const SquigglyNoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -14px;
  top: -40px;

  @media ${device.tablet} {
    left: -50px;
  }

  @media ${device.laptop} {
    left: -80px;
    top: -30px;
  }
`;

interface Props {
  quantityLoaders: number;
  setQuantityLoaders: React.Dispatch<React.SetStateAction<number>>;
  showInteractivityCue?: boolean;
}

export default function LoaderExample({
  quantityLoaders,
  setQuantityLoaders,
  showInteractivityCue = true,
}: Props) {
  const [render, startRender] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [ease, setEase] = React.useState("anticipate");
  const [rotation, setRotation] = React.useState(45);
  const [focus, setFocus] = React.useState("");

  React.useEffect(() => {
    if (quantityLoaders > 10) {
      setQuantityLoaders(10);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [quantityLoaders]);

  return (
    <DemoLoaders showInteractivityCue={showInteractivityCue}>
      <FlexInputs>
        <LabelWrap>
          {showInteractivityCue && (
            <SquigglyNoticeContainer>
              <PenScript color={colors.light}>Take it for a spin</PenScript>
              <SquigglyArrow />
            </SquigglyNoticeContainer>
          )}

          <Label
            variants={labelVariants}
            animate={focus === "quantity" ? "focus" : error ? "hide" : "show"}
            initial={"show"}
            transition={{ duration: "0.3" }}
          >
            Quantity
          </Label>
          <Input
            quantityLoaders={quantityLoaders}
            value={quantityLoaders}
            onChange={setQuantityLoaders}
            onFocus={() => {
              setFocus("quantity");
            }}
            onBlur={() => {
              setFocus("");
            }}
          />
        </LabelWrap>
        <LabelWrap>
          <Label
            variants={labelVariants}
            animate={focus === "rotation" ? "focus" : error ? "hide" : "show"}
            initial={"show"}
            transition={{ duration: "0.3" }}
          >
            Rotation
          </Label>
          <Input
            id="rotation"
            value={rotation}
            onChange={setRotation}
            onFocus={() => {
              startRender(false);
              setFocus("rotation");
            }}
            onBlur={() => {
              startRender(true);
              setFocus("");
            }}
            onKeyPress={(event) => {
              event.key === "Enter"
                ? document.getElementById("rotation").blur()
                : undefined;
            }}
          />
        </LabelWrap>

        <LabelWrap>
          <Label
            htmlFor="ease"
            variants={labelVariants}
            animate={focus === "ease" ? "focus" : error ? "hide" : "show"}
            initial={"show"}
            transition={{ duration: "0.3" }}
          >
            Easing
          </Label>
          <Select
            id="ease"
            name="ease"
            onChange={(e) => setEase(e.target.value)}
            onFocus={() => {
              startRender(false);
              setFocus("ease");
            }}
            onBlur={() => {
              startRender(true);
              setFocus("");
            }}
            onKeyPress={(event) => {
              event.key === "Enter"
                ? document.getElementById("ease").blur()
                : undefined;
            }}
          >
            <option value="anticipate">anticipate</option>
            <option value="linear">linear</option>
            <option value="easeIn">easeIn</option>
            <option value="easeOut">easeOut</option>
            <option value="easeInOut">easeInOut</option>
            <option value="circIn">circIn</option>
            <option value="circOut">circOut</option>
            <option value="circInOut">circInOut</option>
            <option value="backIn">backIn</option>
            <option value="backOut">backOut</option>
            <option value="backInOut">backInOut</option>
          </Select>
        </LabelWrap>
      </FlexInputs>
      <FlexLoadersPreview>
        {render == false ? (
          <Text>
            Hit <code>enter</code> (or click anywhere) to generate{" "}
          </Text>
        ) : (
          <Loader
            ease={ease}
            rotation={rotation}
            setQuantityLoaders={setQuantityLoaders}
            quantityLoaders={quantityLoaders}
          />
        )}
      </FlexLoadersPreview>
    </DemoLoaders>
  );
}

const styleLoaderWrapper = {
  height: "40px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  overflow: "visible",
};

const Loader = ({ ease, quantityLoaders, rotation }) => {
  let renderdots = [];

  for (let i = 0; i < quantityLoaders; i = i + 1) {
    renderdots.push(
      <Dot key={i} ease={ease} rotation={rotation} customdelay={0.2 * i}></Dot>
    );
  }

  return (
    <motion.div style={styleLoaderWrapper} className="preview">
      {renderdots}
    </motion.div>
  );
};

const Dot = ({ ease, customdelay, rotation }) => {
  const dot = {
    width: `20px`,
    height: `20px`,
    opacity: 1,
    margin: 8,
    borderRadius: 0,
    display: "inline-block",
    background: "#eb7085",
    transform: "translateZ(42px)",
    perspective: "20px",
  };

  const variants = {
    show: {
      scale: 0,
      rotate: 0,
    },
    hide: {
      scale: 0.8,
      rotate: parseInt(rotation),
    },
  };

  const transition = {
    repeat: "Infinity",
    repeatType: "reverse",
    ease: ease,
    duration: 1,
    delay: customdelay,
  };

  return (
    <motion.div
      animate={"show"}
      initial={"hide"}
      variants={variants}
      transition={transition}
      style={dot}
    ></motion.div>
  );
};

const InputField = styled.input`
  background: #1d1f2a;
  width: 90px;
  padding: 5px;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  color: white;
  font-size: ${fontSize[12]};
  height: 26px;
  border-radius: ${radius.sm};
  border: 1px solid transparent;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 2x;
  text-overflow: "";
  -ms-expand {
    display: none;
  }

  &:focus {
    border: 1px solid #eb7085;
    outline: none;
    filter: none;
  }
`;

const Input = (props) => {
  const [focused, setFocused] = React.useState(false);

  const { onChange, value, id, ...other } = props;

  const handleChange = React.useCallback(
    (e) => onChange(e.target.value),
    [onChange]
  );

  return (
    <InputField
      type="number"
      id={id}
      value={value}
      onChange={handleChange}
      {...other}
    ></InputField>
  );
};
