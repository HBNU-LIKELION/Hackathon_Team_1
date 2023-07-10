import cv2 # opencv : 이미지 합성
import dlib # 얼굴 영역 탐지, 랜드마크 탐지
from imutils import face_utils, resize #
import numpy as np

orange_img = cv2.imread('pump.jfif') # 이미지를 opencv로 읽어와서 orange_img에 저장
orange_img = cv2.resize(orange_img, dsize=(512, 512)) # 가로 512, 세로 512로 resize 해준다.

detector = dlib.get_frontal_face_detector() # dlib의 얼굴 영역 탐지
predictor = dlib.shape_predictor('shape_predictor_68_face_landmarks.dat') # 랜드마크 탐지

cap = cv2.VideoCapture(0) # 0으로 하면 웹캠 캡쳐

while cap.isOpened():
    ret, img = cap.read() # read 로 이미지를 읽어준 다음에

    if not ret: # 프레임이 없으면 반복문 빠져 나와
        break

    faces = detector(img) # 얼굴영역을 인식해주면 faces에 좌표 정보가 들어간다.

    result = orange_img.copy() # result에 오렌지 이미지를 카피. 나중에 합성할때 쓰인다.

    if len(faces) > 0: # 얼굴이 1개 이상이면 실행
        face = faces[0] # 1개의 얼굴만 사용하므로 0번 인덱스만 face라는 변수에 저장
        
        x1, y1, x2, y2 = face.left(), face.top(), face.right(), face.bottom()
        face_img = img[y1:y2, x1:x2].copy() # face_img에 저장을 해준다

        shape = predictor(img, face) # 랜드마크 68개의 점 구하기
        shape = face_utils.shape_to_np(shape) # dlib 오브젝트를 numpy로 바꿔준다.

        for p in shape:
            cv2.circle(face_img, center=(p[0] - x1, p[1] - y1), radius=2, color=255, thickness=-1)

        # eyes
        le_x1 = shape[36, 0]
        le_y1 = shape[37, 1]
        le_x2 = shape[39, 0]
        le_y2 = shape[41, 1]
        le_margin = int((le_x2 - le_x1) * 0.18) # 눈에 따라 달라질 수 있음

        re_x1 = shape[42, 0]
        re_y1 = shape[43, 1]
        re_x2 = shape[45, 0]
        re_y2 = shape[47, 1]
        re_margin = int((re_x2 - re_x1) * 0.18)

        left_eye_img = img[le_y1-le_margin:le_y2+le_margin, le_x1-le_margin:le_x2+le_margin].copy()
        right_eye_img = img[re_y1-re_margin:re_y2+re_margin, re_x1-re_margin:re_x2+re_margin].copy()

        left_eye_img = resize(left_eye_img, width=100) # 가로 100 사이즈 resize
        right_eye_img = resize(right_eye_img, width=100)

        result = cv2.seamlessClone( # 푸아썸블랜딩 opencv의 seamlessClone 티가 안나게 합성해준다.
            left_eye_img, # 왼쪽눈 합성
            result, # result 에다가 합성
            np.full(left_eye_img.shape[:2], 255, left_eye_img.dtype),
            (150, 200),
            cv2.MIXED_CLONE # 옵션으로 MIXED_CLONE 하면 지가 알아서 합성해준다.
        )

        result = cv2.seamlessClone(
            right_eye_img, # 오른쪽 눈 합성
            result,
            np.full(right_eye_img.shape[:2], 255, right_eye_img.dtype),
            (300, 200),
            cv2.MIXED_CLONE
        )
        # 여기까지 하면 양쪽눈을 다 맞춘다.

        # mouth
        mouth_x1 = shape[48, 0]
        mouth_y1 = shape[50, 1]
        mouth_x2 = shape[54, 0]
        mouth_y2 = shape[57, 1]
        mouth_margin = int((mouth_x2 - mouth_x1) * 0.1)
        
        # 크롭해서 입 이미지 저장한다.
        mouth_img = img[mouth_y1-mouth_margin:mouth_y2+mouth_margin, mouth_x1-mouth_margin:mouth_x2+mouth_margin].copy()

        mouth_img = resize(mouth_img, width=250)

        result = cv2.seamlessClone(
            mouth_img,
            result,
            np.full(mouth_img.shape[:2], 255, mouth_img.dtype),
            (230, 320),
            cv2.MIXED_CLONE
        )

        # cv2.imshow('left', left_eye_img)
        # cv2.imshow('right', right_eye_img)
        # cv2.imshow('mouth', mouth_img)
        cv2.imshow('face', face_img)

        cv2.imshow('result', result)

    # cv2.imshow('img', img)
    if cv2.waitKey(1) == ord('q'):
        break