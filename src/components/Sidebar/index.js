import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink href="#eventDetails">About The Event</SidebarLink>
        <SidebarLink href="#ourSpeakers">Our Speakers</SidebarLink>
        <SidebarLink href="#eventInfo">Event Details</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute
          target="_blank"
          href="https://forms.gle/a5jyR1XQAzHFtYnK6"
        >
          Register Now
        </SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
