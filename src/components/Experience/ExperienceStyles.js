
import styled from 'styled-components';

export const Boxes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 40px 0;

  /* Vertical Line */
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background: linear-gradient(180deg, #13ADC7 0%, #945DD6 100%);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    border-radius: 2px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    &::after {
      left: 30px;
    }
  }
`;

export const BoxWrapper = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: ${props => props.$isLeft ? '0' : '50%'};

  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }

  /* Timeline Dot */
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: ${props => props.$isLeft ? '-10px' : 'auto'};
    left: ${props => props.$isLeft ? 'auto' : '-10px'};
    background-color: #0F1624;
    border: 4px solid #13ADC7;
    top: 32px;
    border-radius: 50%;
    z-index: 1;
    transition: all 0.3s ease;

    @media ${props => props.theme.breakpoints.sm} {
      left: 21px; 
    }
  }

  /* Hover effect for dot */
  &:hover::after {
    background-color: #13ADC7;
    box-shadow: 0 0 10px #13ADC7;
  }
`;

export const Box = styled.div`
  background: linear-gradient(135deg, #1F2937 0%, #111827 100%);
  border-radius: 16px;
  padding: 28px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  min-height: ${props => 150 + (props.$duration || 0) * 10}px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: #13ADC7;
  }

  /* Arrow/Triangle */
  &::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 32px;
    width: 0;
    z-index: 1;
    right: ${props => props.$isLeft ? '-10px' : 'auto'};
    left: ${props => props.$isLeft ? 'auto' : '-10px'};
    border: medium solid white;
    border-width: 10px 10px 10px 10px;
    border-color: transparent ${props => props.$isLeft ? 'rgba(255, 255, 255, 0.1)' : 'transparent'} transparent ${props => props.$isLeft ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
    
    @media ${props => props.theme.breakpoints.sm} {
      left: -10px;
      right: auto;
      border-color: transparent rgba(255, 255, 255, 0.1) transparent transparent;
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 20px;
  }
`;

export const BoxTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.02em;
  background: linear-gradient(90deg, #fff 0%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
  }
`;

export const BoxSubtitle = styled.h4`
  font-weight: 500;
  font-size: 18px;
  color: #9CA3AF;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-size: 16px;
  }
`;

export const BoxText = styled.p`
  font-size: 16px;
  color: #D1D5DB;
  line-height: 26px;
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
  
  &:before {
    content: "•";
    color: #13ADC7;
    margin-right: 12px;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Date = styled.span`
  font-size: 13px;
  color: #fff;
  font-weight: 600;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  padding: 6px 16px;
  border-radius: 50px;
  letter-spacing: 0.05em;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;
