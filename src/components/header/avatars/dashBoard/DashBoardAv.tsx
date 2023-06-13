import * as React from "react";
import Popover from "@mui/material/Popover";
import { SxProps, Theme, Box } from "@mui/material";
import UserData from "./userDatata/UserData";
import ListPartners from "./listPartners/ListPartners";

const dadaUser = {
  id: "650",
  name: "Артур",
  surname: "Утенков",
  patronymic: "Николаевич",
  login: "dir**",
  phone: "8 (800) 333-17-21",
  mango_phone: "1**",
  email: "hi@skilla.ru",
  position: "Директор",
  is_blocked: "0",
  avatar: "https://lk.skilla.ru/img/noavatar.jpg",
  header_notice: {
    title: "",
    button_name: "",
    button_link: "",
  },
  partnership: {
    id: "136",
    name: 'ООО "ГРУЗЧИКОВ-СЕРВИС СПБ"',
    brand_name: "Грузчиков-Сервис",
    brand_ico: "https://lk.skilla.ru/documents/brands/1/ico.png",
    city: "Санкт-Петербург",
    phone: "Санкт-Петербург",
    email: "info@gruzchikov-service.ru",
    adress: "195027 г. Санкт-Петербург, пр-кт Энергетиков, дом 10А, офис 416",
    ur_adress:
      "195027 г. Санкт-Петербург, пр-кт Энергетиков, дом 10А, офис 420",
    office_adress:
      "195027 г. Санкт-Петербург, пр-кт Энергетиков, дом 10А, офис 416",
    inn: "7806268944",
    kpp: "780601001",
    rs: "40702810703500018047",
    bank: 'ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"',
    ks: "30101810845250000999",
    bik: "044525999",
    ogrn: "1177847173910",
  },
};

const dataPartners = {
  listes: [
    {
      headibg: "Оператор",
      list: [
        {
          id: 1,
          name: "Мирон Батонов",
        },
        {
          id: 2,
          name: "Алексей Ильин",
        },
        {
          id: 3,
          name: "Милана Константинопольская",
        },
      ],
    },
    {
      headibg: "Логисты",
      list: [
        {
          id: 5,
          name: "Александра Сизых",
        },
        {
          id: 6,
          name: "Илья Алексеев",
        },
        {
          id: 7,
          name: "Илья Алексеев",
        },
      ],
    },
    {
      headibg: "Бухгалтеры",
      list: [
        {
          id: 8,
          name: "Полина Калинина",
        },
        {
          id: 9,
          name: "Наталья Натальева",
        },
        {
          id: 10,
          name: "Константин Константинопольский",
        },
      ],
    },
  ],
};

const styleSX: Record<string, SxProps<Theme>> = {
  popover: {
    "& .MuiPopover-paper": {
      border: "1px solid #EAF0FA",
      boxShadow: "0px 0px 26px rgba(233, 237, 243, 0.8)",
      borderRadius: "4px",
      width: "500px",
    },
  },
  heading: {
    display: "flex",
    gap: "5px",
    p: "10px 32px",
    fontSize: "15px",
    width: "100%",
    color: "var(--blue-arrow)",
    opacity: "0.87",
    "&:hover": {
      color: "var(--blue-buuton-hover)",
      backgroundColor: "var(--blue-hover-opacity)",
    },
  },
};

const DashBoardAv = ({
  components,
  setOpen,
}: {
  components: JSX.Element;
  setOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setOpen(event);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setOpen(event);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id2 = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ cursor: "pointer" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& .MuiBox-root": {
            height: "24px",
          },
        }}
        component="span"
        aria-describedby={id2}
        onClick={handleClick}
      >
        {components}
      </Box>
      <Popover
        sx={styleSX.popover}
        id={id2}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <UserData dadaUser={dadaUser} />
        <>
          {dataPartners.listes.map(
            ({ headibg, list }: { headibg: string; list: Object }) => (
              <React.Fragment key={headibg}>
                <ListPartners headibg={headibg} list={list} />
              </React.Fragment>
            )
          )}
        </>
      </Popover>
    </Box>
  );
};

export default DashBoardAv;
