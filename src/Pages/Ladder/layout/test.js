const CoreLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Outlet />
      {/* Footer */}
    </>
  );
};

const Table = (children) => {
  return (
    <div>
      {children.map(({ id, name }) => (
        <Row id={id} />
      ))}
    </div>
  );
};

const LeaderBoardLayout = () => {
  return (
    <>
      <Sidebar />
      <Table>
        <Outlet />
      </Table>
    </>
  );
};

const r = () => {
  return (
    <Route element={<CoreLayout />}>
      {/* ...Routes... */}
      <Route path="leaderboard" element={<LeaderBoardLayout />}>
        <Route path="" element={<Public />} />
        <Route path="dm" element={<DM />} />
        <Route path="classic" element={<Classic />} />
      </Route>
    </Route>
  );
};
