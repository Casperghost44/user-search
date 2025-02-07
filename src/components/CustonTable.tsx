import {
  Alert,
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import UserType from "../types/UserType";
import { useState } from "react";

const CustonTable = ({
  users,
  loading,
  error,
  darkTheme,
}: {
  users: UserType[];
  loading: boolean;
  error: Error | null;
  darkTheme: boolean;
}) => {
  const [currentUser, setCurrentUser] = useState<UserType>({} as UserType);

  const handleClose = () => {
    setCurrentUser({} as UserType);
  };

  if (error !== null) {
    return (
      <div className="px-3 max-w-[1000px] mx-auto mb-6">
        <Alert severity="error">
          Something went wrong with getting the data. Please reload the page or
          try again later.
        </Alert>
      </div>
    );
  }

  if ((!users || users.length === 0) && !loading && !error)
    return (
      <div className="px-3 max-w-[1000px] mx-auto mb-6">
        <Alert severity="info">
          There is no data matches your search. Please try another filter or
          input diffrent query!
        </Alert>
      </div>
    );

  return (
    <>
      <TableContainer
        sx={{
          maxWidth: 1000,
          mx: "auto",
          px: 3,
          mb: 6,
          bgcolor: darkTheme ? "#191919" : "#fff",
        }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                bgcolor: darkTheme ? "#191919" : "#fff",
                "& th": { color: darkTheme ? "#fff" : "#222" },
              }}
            >
              <TableCell>
                {loading ? (
                  <Skeleton animation="wave" variant="text" />
                ) : (
                  "Name"
                )}
              </TableCell>
              <TableCell align="right">
                {loading ? (
                  <Skeleton
                    animation="wave"
                    variant="rounded"
                    width={70}
                    height={20}
                  />
                ) : (
                  "Username"
                )}
              </TableCell>
              <TableCell align="right">
                {loading ? (
                  <Skeleton
                    animation="wave"
                    variant="rounded"
                    width={70}
                    height={20}
                  />
                ) : (
                  "Email"
                )}
              </TableCell>
              <TableCell align="right">
                {loading ? (
                  <Skeleton
                    animation="wave"
                    variant="rounded"
                    width={100}
                    height={20}
                  />
                ) : (
                  "Address"
                )}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading &&
              [1, 2, 3, 4, 5].map((item) => (
                <TableRow
                  key={item}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    bgcolor: darkTheme ? "#191919" : "#fff",
                  }}
                >
                  <TableCell>
                    <div className="flex gap-2 items-center">
                      <Skeleton variant="circular" width={40} height={40} />
                      <Skeleton
                        animation="wave"
                        variant="rounded"
                        width={200}
                        height={20}
                      />
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" variant="text" />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" variant="text" />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" variant="text" />
                    <br />
                    <Skeleton animation="wave" variant="text" />
                  </TableCell>
                </TableRow>
              ))}
            {users?.map((item) => (
              <TableRow
                key={item.id}
                onClick={() => setCurrentUser(item)}
                className={`${
                  darkTheme ? "hover:bg-[#717171]!" : "hover:bg-blue-100!"
                } hover:cursor-pointer`}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  bgcolor: darkTheme ? "#191919" : "#fff",
                  "& td": { color: darkTheme ? "#fff" : "#222" },
                }}
              >
                <TableCell>
                  <div className="flex gap-2 items-center">
                    <Avatar
                      sx={{
                        color: darkTheme ? "#444" : "#fff",
                        bgcolor: darkTheme ? "#eee" : "#aaa",
                      }}
                    >
                      {item.name[0]}
                      {item.name[1]}
                    </Avatar>
                    <span className="ml-2">{item.name}</span>
                  </div>
                </TableCell>
                <TableCell align="right">{item.username}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">
                  {item.address.street}, {item.address.city} <br />
                  {item.address.zipcode}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog fullWidth maxWidth="sm" open={!!currentUser.id ? true : false}>
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            bgcolor: darkTheme ? "#191919" : "#fff",
            color: darkTheme ? "#fff" : "#222",
          }}
          id="customized-dialog-title"
        >
          {currentUser?.name}'s Info
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: "column",
            bgcolor: darkTheme ? "#191919" : "#fff",
            color: darkTheme ? "#fff" : "#222",
          }}
        >
          <Avatar
            sx={{
              color: darkTheme ? "#444" : "#fff",
              bgcolor: darkTheme ? "#eee" : "#aaa",
              height: 56,
              width: 56,
            }}
          >
            {currentUser?.name?.[0]}
            {currentUser?.name?.[1]}
          </Avatar>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-inherit">
              {currentUser?.name}
            </h3>
            <span className="italic text-[#aaa] mb-5">
              @{currentUser?.username}
            </span>
            <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4">
              <div className="flex items-center gap-2">
                <MailOutlineIcon />
                <span>{currentUser?.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <SmartphoneIcon />
                <span>{currentUser?.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <LocationOnOutlinedIcon />
                <span>
                  {currentUser?.address?.street}, {currentUser?.address?.city}{" "}
                  <br />
                  {currentUser?.address?.zipcode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BusinessOutlinedIcon />
                <span>{currentUser?.company?.name}</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustonTable;
