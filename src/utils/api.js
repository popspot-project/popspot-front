// utils/api.js
export const API_URL = "http://localhost:1125/popspot";

// 공지사항 추가 (POST)
export const addNotice = async (noticeData) => {
  try {
    const formData = new FormData();
    for (const key in noticeData) {
      formData.append(key, noticeData[key]);
    }

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("공지사항 추가 실패");
    }

    return await response.json()  && console.log("보내짐");
  } catch (error) {
    console.error("Error adding notice:", error);
    throw error;
  }
};

// 공지사항 목록 가져오기 (GET)
export const getNotices = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("공지사항 목록 가져오기 실패");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching notices:", error);
    throw error;
  }
};

// 공지사항 수정 (PUT)
export const updateNotice = async (postid, updatedData) => {
  try {
    const response = await fetch(`${API_URL}/${postid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("공지사항 수정 실패");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating notice:", error);
    throw error;
  }
};

// 공지사항 삭제 (DELETE)
export const deleteNotice = async (postid) => {
  try {
    const response = await fetch(`${API_URL}/${postid}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("공지사항 삭제 실패");
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting notice:", error);
    throw error;
  }
};
