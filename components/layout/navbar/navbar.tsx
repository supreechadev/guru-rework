import { FC } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Link,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

import { Icon } from "@/components/common/icon";
import useMediaQuery from "@/libs/hooks/useMediaQuery";
import useIsClient from "@/libs/hooks/useIsClient";
import logo from "@/public/images/logo.svg";

export const Navbar: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <Box as="header" className="shadow">
      <HStack
        as="nav"
        gap="3"
        className="container max-w-7xl py-2 md:py-4 flex justify-between items-center transition-all"
      >
        <NextLink
          href="/"
          className="flex-shrink-0 w-24  md:w-32 h-10 md:h-12 relative transition-all"
        >
          <Image src={logo} alt="guru academy logo" fill priority />
        </NextLink>
        {isDesktop ? (
          <>
            {" "}
            <Menu isOpen={isOpen}>
              <MenuButton
                className="flex-shrink-0"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                หมวดหมู่
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>ติวตำรวจ</MenuItem>
                <MenuItem>ติว กพ.</MenuItem>
              </MenuList>
            </Menu>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={
                  <Icon.MagnifyingGlass width={20} className="text-gray-400" />
                }
              />
              <Input type="text" placeholder="ค้นหาคอร์สเรียน" rounded="full" />
            </InputGroup>
            <Link
              className="flex-shrink-0"
              href="https://upmostly.com/nextjs/how-to-link-to-an-external-page-in-nextjs"
              isExternal
            >
              ไปเว็ปทำข้อสอบ
            </Link>
            <Button className="flex-shrink-0" variant="outline">
              ลงทะเบียน
            </Button>
            <Button className="flex-shrink-0" variant="solid">
              เข้าสู่ระบบ
            </Button>
          </>
        ) : (
          <IconButton
            variant="ghost"
            aria-label="menu"
            icon={<Icon.Bar3 width={20} className="" />}
          />
        )}
      </HStack>
    </Box>
  );
};
