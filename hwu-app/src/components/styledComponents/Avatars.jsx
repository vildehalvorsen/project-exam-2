import styled from "styled-components";
import colors from "../../theme/colors";
import borders from "../../theme/borders";
import device from "../../theme/device";

const MainAvatar = styled.img`
  width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: ${borders.imageBorder};
  filter: drop-shadow(0 3px 4px ${colors.gray});
`;

const NavAvatar = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  border-radius: ${borders.imageBorder};
`;

const FollowerAvatar = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  border-radius: ${borders.imageBorder};

  @media (${device.laptop}) {
    width: 40px;
    height: 40px;
  }
`;

const PostAvatar = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: ${borders.imageBorder};
`;

const CommentAvatar = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  border-radius: ${borders.imageBorder};
  margin-right: 5px;
`;

const ProfileListAvatar = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: ${borders.imageBorder};
  filter: drop-shadow(0 3px 4px ${colors.gray});
  margin-bottom: 10px;

  @media (${device.mobileL}) {
    width: 110px;
    height: 110px;
  }
`;

export {
  MainAvatar,
  NavAvatar,
  FollowerAvatar,
  PostAvatar,
  CommentAvatar,
  ProfileListAvatar,
};
