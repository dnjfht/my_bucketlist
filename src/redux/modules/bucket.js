import { v4 as uuidv4 } from "uuid";

// action value

const ADDBUCKET = "add_bucket";

// action creator

export const add_bucket = (payload) => {
  return {
    type: ADDBUCKET,
    payload: payload,
  };
};

// initialState
const initialState = [
  {
    id: uuidv4(),
    isActive: false,
    title: "자바스크립트 공부하기",
    content: "이제 심화 과정을 좀 파야 함",
  },
  {
    id: uuidv4(),
    isActive: true,
    title: "살 10kg 뺴기",
    content: "운동 꾸준히 하는게 중요함",
  },
  {
    id: uuidv4(),
    isActive: true,
    title: "밥 잘 챙겨먹기",
    content: "하루 세 끼 꼬박꼬박",
  },
  {
    id: uuidv4(),
    isActive: true,
    title: "밤낮 바꾸기",
    content: "공부를 하더라도 밤, 낮을 지켜서 하기",
  },
];

// reducer

const bucket = (state = initialState, action) => {
  switch (action.type) {
    case ADDBUCKET: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default bucket;
