// import { Outlet, useNavigate } from "react-router";
// import Header from "./components/Header/Header";
// import { useEffect, useState } from "react";
// import { supabase } from "./supabase/config";
// import { useDispatch, useSelector } from "react-redux";
// import { clearUser, setUser, setUserId, updateIsProfileCompleted } from "./store/authSlice";
// import Footer from "./components/Footer/Footer";
// import { Loader2 } from "lucide-react";

// function App() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isProfileCompleted = useSelector((state) => state.auth.isProfileCompleted);
//   const [loading, setLoading] = useState(true);

//   const handleUserProfile = async (user) => {
//     dispatch(setUser(user));
//     dispatch(setUserId(user.id));

//     const { data: profile, error } = await supabase
//       .from("profiles")
//       .select("is_profile_completed")
//       .eq("id", user.id)
//       .single();

//     if (error && error.code === "PGRST116") {
//       // Row not found → create profile
//       const { error: insertError } = await supabase.from("profiles").insert({
//         id: user.id, // must provide since id is NOT NULL
//         is_profile_completed: false,
//       });

//       if (insertError) {
//         console.error("Failed to create profile:", insertError);
//         setLoading(false); // stop loader even if insert fails
//         return;
//       }

//       navigate("/complete-profile");
//     } else if (error) {
//       console.error("Unexpected error fetching profile:", error);
//       setLoading(false);
//       return;
//     } else if (!profile.is_profile_completed) {
//       navigate("/complete-profile");
//     } else {
//       dispatch(updateIsProfileCompleted());
//     }
//   };

//   useEffect(() => {
//     const init = async () => {
//       const { data } = await supabase.auth.getSession();
//       const user = data?.session?.user;
//       if (user) {
//         await handleUserProfile(user);
//       } else {
//         dispatch(clearUser());
//       }
//       setLoading(false);
//     };

//     init();

//     const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
//       const user = session?.user;
//       if (user) await handleUserProfile(user);
//       else dispatch(clearUser());
//     });

//     return () => listener.subscription.unsubscribe();
//   }, [dispatch, navigate]);

//   if (loading)
//     return (
//       <div className="w-full h-screen flex justify-center items-center">
//         <Loader2 className="animate-spin h-10 w-10 z-40" />
//       </div>
//     );

//   return (
//     <main>
//       {isAuthenticated && isProfileCompleted && <Header />}
//       <Outlet />
//       {isAuthenticated && isProfileCompleted && <Footer />}
//     </main>
//   );
// }

// export default App;

import { Outlet, useNavigate } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import authService from "./supabase/auth";
import { clearUser, setLoading, setUser, setUserId, updateIsProfileCompleted } from "./store/authSlice";
import { supabase } from "./supabase/config";

function App() {
  const { isAuthenticated, isProfileCompleted, loading, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // // const [loading, setLoading] = useState(true);

  // // // small delay to allow AuthProvider to update Redux
  // // useEffect(() => {
  // //   const timer = setTimeout(() => setLoading(false), 200);
  // //   return () => clearTimeout(timer);
  // // }, []);

  // useEffect(() => {
  //   if (!loading && isAuthenticated && !isProfileCompleted) {
  //     navigate("/complete-profile");
  //   }
  // }, [isAuthenticated, isProfileCompleted, navigate, loading]);

  // useEffect(() => {
  //   let mounted = true
  //   const handleUserProfile = async (userId) => {
  //     try {
  //       console.log("inside handle auth");

  //       const { data: profile, error } = await supabase
  //         .from("profiles")
  //         .select("is_profile_completed")
  //         .eq("id", userId)
  //         .maybeSingle();

  //       if (error) {
  //         console.error("Error fetching profile:", error);
  //         return;
  //       }

  //       if (!profile) {
  //         await supabase.from("profiles").insert({
  //           id: userId,
  //           is_profile_completed: false,
  //         });
  //         dispatch(updateIsProfileCompleted(false))
  //       } else if (profile.is_profile_completed) {
  //         console.log(profile.is_profile_completed);

  //         dispatch(updateIsProfileCompleted(true));
  //       }
  //     } catch (err) {
  //       console.error("Profile error:", err);
  //     }
  //   };

  //   const initAuth = async () => {
  //     dispatch(setLoading(true));
  //     try {
  //       const user = await authService.getCurrentUser(); // async
  //       if (!user) {
  //         // console.error("getUser error:", error);
  //         dispatch(clearUser());
  //         return;
  //       }

  //       if (user) {
  //         // console.log("Logged in user:", user);
  //         await handleUserProfile(user.id);
  //         dispatch(setUser(user));
  //         dispatch(setUserId(user.id));
  //       } else {
  //         dispatch(clearUser());
  //       }
  //     } catch (error) {
  //       console.error("Init auth error:", error);
  //       dispatch(clearUser());
  //     } finally {
  //       dispatch(setLoading(false));
  //     }
  //   };

  //   initAuth();
  // }, [dispatch]);


  // useEffect(() => {
  //   let mounted = true;

  //   const handleUserProfile = async (userId) => {
  //     try {
  //       const { data: profile, error } = await supabase
  //         .from("profiles")
  //         .select("is_profile_completed")
  //         .eq("id", userId)
  //         .maybeSingle();

  //       if (error) throw error;

  //       if (!profile) {
  //         await supabase.from("profiles").insert({
  //           id: userId,
  //           is_profile_completed: false,
  //         });
  //         if (mounted) {
  //            dispatch(updateIsProfileCompleted(false))
  //            return
  //         }
  //       } else if (mounted && profile) {
  //         dispatch(updateIsProfileCompleted(profile?.is_profile_completed));
  //         return
  //       }
  //     } catch (err) {
  //       console.error("Profile error:", err);
  //     }
  //   };

  //   const initAuth = async () => {
  //     dispatch(setLoading(true));
  //     try {
  //       const user = await authService.getCurrentUser();

  //       if (!user) {
  //         if (mounted) dispatch(clearUser());
  //         return;
  //       }

  //       if (mounted && user) {
  //         dispatch(setUser(user));
  //         dispatch(setUserId(user.id));
  //       }
  //       await handleUserProfile(user.id);
  //     } catch (error) {
  //       console.error("Init auth error:", error);
  //       if (mounted) dispatch(clearUser());
  //     } finally {
  //       if (mounted) dispatch(setLoading(false));
  //     }
  //   };

  //   initAuth();

  //   const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
  //   const user = session?.user ?? null;
  //   if (user) {
  //     if (mounted) {
  //       dispatch(setUser(user));
  //       dispatch(setUserId(user.id));
  //     }
  //     await handleUserProfile(user.id);
  //   } else {
  //     if (mounted) dispatch(clearUser());
  //   }
  // });

    

  //   return () => {
  //     mounted = false;
  //     listener.subscription.unsubscribe();
  //   };
  // }, [dispatch]);

  useEffect(() => {
  let mounted = true;

  const handleUserProfile = async (userId) => {
    try {
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("is_profile_completed")
        .eq("id", userId)
        .maybeSingle();

      if (error) throw error;

      if (!profile) {
        await supabase.from("profiles").insert({
          id: userId,
          is_profile_completed: false,
        });
        if (mounted) dispatch(updateIsProfileCompleted(false));
      } else {
        if (mounted) dispatch(updateIsProfileCompleted(profile.is_profile_completed));
      }
    } catch (err) {
      console.error("Profile error:", err);
    }
  };

  const initAuth = async () => {
    dispatch(setLoading(true));
    try {
      const user = await authService.getCurrentUser();

      if (!user) {
        if (mounted) dispatch(clearUser());
        return;
      }

      if (mounted) {
        dispatch(setUser(user));
        dispatch(setUserId(user.id));
      }
      await handleUserProfile(user.id);
    } catch (error) {
      console.error("Init auth error:", error);
      if (mounted) dispatch(clearUser());
    } finally {
      if (mounted) dispatch(setLoading(false));
    }
  };

  initAuth();

  // const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
  //   const user = session?.user ?? null;

  //   if (user) {
  //     if (mounted) {
  //       dispatch(setUser(user));
  //       dispatch(setUserId(user.id));
  //     }
  //     await handleUserProfile(user.id);
  //   } else {
  //     if (mounted) dispatch(clearUser());
  //   }
  // });

  return () => {
    mounted = false;
    // listener.subscription.unsubscribe();
  };
}, [dispatch]);



  useEffect(() => {
    if (user && isProfileCompleted) {
      navigate("/");
    }
  }, [user, isProfileCompleted]);

  return loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader2 className="animate-spin h-10 w-10 z-40" />
    </div>
  ) : (
    <main>
      {isAuthenticated && isProfileCompleted && <Header />}
      <Outlet />
      {isAuthenticated && isProfileCompleted && <Footer />}
    </main>
  );
}

export default App;

