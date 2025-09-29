import {
  Appear,
  Heading,
  ListItem,
  Slide,
  UnorderedList,
  Image,
  Text,
  CodePane,
  FlexBox,
} from "spectacle";
import { baseImageStyle } from "../theme";

export function Implementation() {
  return (
    <>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={16}
        >
          <Heading>7. Implementierung</Heading>
          <Heading>Struktur &amp; Semantik</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <Heading>Skip Links in der Anwendung</Heading>
        <Image
          src="/eventa11y_skip-links.png"
          width="100%"
          height="80%"
          style={{
            objectFit: "contain",
          }}
        />
      </Slide>
      <Slide>
        <Heading>Navigationskonzept &amp; Header</Heading>
        <video
          src="/eventa11y_mobile-menu.mp4"
          controls
          autoPlay
          loop
          muted
          style={{
            maxHeight: "80%",
          }}
        />
      </Slide>
      <Slide>
        <Heading>Konsistente Navigation (3.2.3) im Base‑Layout.</Heading>
        <CodePane
          stepIndex={0}
          language="typescript"
          highlightRanges={[
            [11, 11],
            [15, 15],
          ]}
        >
          {`
    <html lang="de">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <DateProvider>
              <Providers>
                <AuthProvider>
                  <EventsProvider>
                    <CssBaseline />
                    <SkipLinks />
                    <Navbar />
                    <Box component="main" id="main">
                      {children}
                    </Box>
                    <Footer />
                  </EventsProvider>
                </AuthProvider>
              </Providers>
            </DateProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
`}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Account‑Dropdown</Heading>

        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {/* Basisbild immer sichtbar */}
          <figure>
            <Image
              src="/account-dropdown_logged-out.png"
              alt=""
              {...baseImageStyle}
            />
            {/* Layer 1 bei Klick */}
            <Appear>
              <Image
                src="/account-dropdown_logged-in.png"
                alt=""
                {...baseImageStyle}
              />
            </Appear>

            <Text
              as="figcaption"
              style={{
                textAlign: "center",
                position: "absolute",
                top: "70%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Account Dropdown Menu
            </Text>
          </figure>
        </div>
      </Slide>

      <Slide>
        <Heading>Technische Umsetzung</Heading>
        <CodePane
          stepIndex={0}
          language="typescript"
          highlightRanges={[
            [13, 16],
            [46, 49],
          ]}
        >
          {`
export default function MenuListComposition() {
  {...}

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Admin Optionen">
            <IconButton
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Avatar
                alt="Your Profile Picture"
                src={currentUser ? "/img/3d_avatar.svg" : undefined}
                sx={{ width: 48, height: 48 }}
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          sx={{ zIndex: 2 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <List
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    {currentUser
                      ? [
                          <MenuItem
                            key="create-event"
                            sx={{
                              whiteSpace: "nowrap",
                            }}
                          >
                            <Link href="/event/create">
                              <ListItemIcon>
                                <AddLocationAlt fontSize="small" />
                              </ListItemIcon>
                              Event erstellen
                            </Link>
                          </MenuItem>,
                          <MenuItem
                            key="logout"
                            onClick={() => {
                              logout();
                              window.location.href = "/";
                            }}
                            sx={{
                              whiteSpace: "nowrap",
                              cursor: "pointer",
                            }}
                          >
                            <ListItemIcon>
                              <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                          </MenuItem>,
                        ]
                      : [
                          <MenuItem
                            key="login"
                            sx={{
                              whiteSpace: "nowrap",
                            }}
                          >
                            <Link href="/login">
                              <ListItemIcon>
                                <Login fontSize="small" />
                              </ListItemIcon>
                              Login
                            </Link>
                          </MenuItem>,
                          <MenuItem
                            key="registration"
                            sx={{
                              whiteSpace: "nowrap",
                            }}
                          >
                            <Link href="/registration">
                              <ListItemIcon>
                                <PersonAdd fontSize="small" />
                              </ListItemIcon>
                              Registrieren
                            </Link>
                          </MenuItem>,
                        ]}
                  </List>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
`}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Formulare &amp; Fehlermeldungen</Heading>

        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {/* Basisbild immer sichtbar */}
          <figure>
            <Image src="/eventa11y_helpertext.png" alt="" {...baseImageStyle} />
            {/* Layer 1 bei Klick */}
            <Appear>
              <Image
                src="/eventa11y_helpertext_grey.png"
                alt=""
                {...baseImageStyle}
              />
            </Appear>

            <Text
              as="figcaption"
              style={{
                textAlign: "center",
                position: "absolute",
                top: "75%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Account Dropdown Menu
            </Text>
          </figure>
        </div>
      </Slide>
      <Slide>
        <Heading>Technische Umsetzung</Heading>
        <CodePane
          stepIndex={0}
          language="typescript"
          highlightRanges={[
            [38, 38],
            [40, 40],
          ]}
        >
          {`
export default function InputField<T extends FieldValues>({
  name,
  label,
  register,
  error,
  type = "text",
  multiline = false,
  minRows,
  placeholder,
  required = false,
  autoComplete,
}: InputFieldProps<T>) {
  return (
    <FormControl fullWidth error={!!error} required={required} margin="normal">
      <InputLabel
        shrink
        htmlFor={String(name)}
        sx={{
          fontSize: 16,
          fontWeight: 500,
          transform: "none",
          position: "static",
        }}
      >
        {label}
      </InputLabel>
      <InputBase
        id={name}
        {...register(name, {
          valueAsNumber: type === "number",
        })}
        type={type}
        multiline={multiline}
        minRows={minRows}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputProps={multiline ? { style: { resize: "vertical" } } : undefined}
        aria-describedby={name + "_helper"}
      />
      <FormHelperText id={name + "_helper"}>{error}</FormHelperText>
    </FormControl>
  );
}
`}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Buchungsprozess</Heading>
        <video
          src="/eventa11y_booking.mp4"
          controls
          autoPlay
          loop
          muted
          style={{
            maxHeight: "70%",
          }}
        />
      </Slide>
      <Slide>
        <Heading>FAQs</Heading>
        <Image
          src="/eventa11y_faq.png"
          width="100%"
          height="80%"
          style={{
            objectFit: "contain",
          }}
        />
      </Slide>
      <Slide>
        <Heading>Technische Umsetzung</Heading>
        <CodePane
          stepIndex={0}
          language="typescript"
          highlightRanges={[
            [3, 4],
            [9, 15],
          ]}
        >
          {`
      <Accordion>
        <AccordionSummary
          id="eventa11yExplanation-header"
          aria-controls="eventa11yExplanation-content"
          expandIcon={<ExpandMoreIcon />}
        >
          Was ist Event A11y und was bietet die Website?
        </AccordionSummary>
        <AccordionDetails>
          Event A11y (Accessibility) ist eine Plattform, die sich darauf
          spezialisiert, Veranstaltungen inklusiv und barrierefrei zu gestalten.
          Auf eventa11y.devoniq.de finden sich Leitfäden, Checklisten und
          Werkzeuge, die Event‑Organisatoren unterstützen, Events so zu planen,
          dass sie für alle zugänglich sind – unabhängig von Behinderungen.
        </AccordionDetails>
      </Accordion>
`}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Rendering (Umsetzung von MUI)</Heading>
        <CodePane
          stepIndex={0}
          language="typescript"
          highlightRanges={[
            [5, 7],
            [26, 27],
          ]}
        >
          {`
<button
  class="MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters mui-1vq7cph-MuiButtonBase-root-MuiAccordionSummary-root"
  tabindex="0"
  type="button"
  aria-expanded="true"
  id="eventa11yExplanation-header"
  aria-controls="eventa11yExplanation-content"
>
  <span class="MuiAccordionSummary-content MuiAccordionSummary-contentGutters mui-yfrx4k-MuiAccordionSummary-content">
    Was ist Event A11y und was bietet die Website?
  </span>
  <span class="MuiAccordionSummary-expandIconWrapper mui-1wqf3nl-MuiAccordionSummary-expandIconWrapper">
    <svg
      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1umw9bq-MuiSvgIcon-root"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="ExpandMoreIcon"
    >
      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </svg>
  </span>
</button>

<div
  aria-labelledby="eventa11yExplanation-header"
  id="eventa11yExplanation-content"
  role="region"
  class="MuiAccordion-region"
>
  <div class="MuiAccordionDetails-root mui-1hcnwl2-MuiAccordionDetails-root">
    Event A11y (Accessibility) ist eine Plattform, die sich darauf
    spezialisiert, Veranstaltungen inklusiv und barrierefrei zu
    gestalten. Auf eventa11y.devoniq.de finden sich Leitfäden,
    Checklisten und Werkzeuge, die Event-Organisatoren unterstützen,
    Events so zu planen, dass sie für alle zugänglich sind –
    unabhängig von Behinderungen.
  </div>
</div>
`}
        </CodePane>
      </Slide>
    </>
  );
}
