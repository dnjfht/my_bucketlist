import { v4 as uuidv4 } from "uuid";

// action value

const ADDBUCKET = "add_bucket";
const CHANGESWITCH = "change_switch";
const DELETEBUCKET = "delete_bucket";
const EDITBUCKET = "edit_bucket";

// action creator

export const add_bucket = (payload) => {
  return {
    type: ADDBUCKET,
    payload: payload,
  };
};

export const change_switch = (payload) => {
  return {
    type: CHANGESWITCH,
    payload: payload,
  };
};

export const delete_bucket = (payload) => {
  return {
    type: DELETEBUCKET,
    payload: payload,
  };
};

export const edit_bucket = (payload) => {
  return {
    type: EDITBUCKET,
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
    case CHANGESWITCH: {
      return state.map((bucket) => {
        if (bucket.id === action.payload) {
          return { ...bucket, isActive: !bucket.isActive };
        } else {
          return bucket;
        }
      });
    }
    case DELETEBUCKET: {
      return state.filter((bucket) => {
        return bucket.id !== action.payload;
      });
    }
    case EDITBUCKET: {
      return state.map((bucket) => {
        if (bucket.id === action.payload.id) {
          return {
            ...bucket,
            title: action.payload.newTitle,
            content: action.payload.newContent,
          };
        } else {
          return bucket;
        }
      });
    }
    default:
      return state;
  }
};

export default bucket;
