// // import { useEffect } from "react";
// // import { useDispatch } from "react-redux";
// // import {
// //   setUser,
// //   setUserId,
// //   updateIsProfileCompleted,
// //   clearUser,
// //   setLoading,
// // } from "../store/authSlice";
// // import { supabase } from "@/supabase/config";

// // const AuthProvider = ({ children }) => {
// //   const dispatch = useDispatch();

// //   const handleUserProfile = async (user) => {
// //     dispatch(setUser(user));
// //     dispatch(setUserId(user.id));

// //     // Just fetch the profile — trigger ensures it exists
// //     const { data: profile, error } = await supabase
// //       .from("profiles")
// //       .select("is_profile_completed")
// //       .eq("id", user.id)
// //       .single()

// //     if (error) {
// //       console.error("Error fetching profile:", error);
// //       return;
// //     }

// //     if (profile?.is_profile_completed) {
// //       dispatch(updateIsProfileCompleted());
// //     }
// //   };

// //   useEffect(() => {
// //     let isMouted = true
// //     const init = async() => {
// //       const { data } = await supabase.auth.getSession();
// //       console.log(data);

// //       const user = data?.session?.user;

// //       if (user && isMouted) await handleUserProfile(user);
// //       else dispatch(clearUser());
// //       if(isMouted) dispatch(setLoading())
// //     };

// //     init()

// //     const { data: listener } = supabase.auth.onAuthStateChange(
// //       async (_event, session) => {
// //         const user = session?.user;
// //         if(!isMouted) return
// //         if (user) await handleUserProfile(user);
// //         else dispatch(clearUser());
// //       }
// //     )

// //     return () => {
// //       isMouted = false
// //       listener.subscription.unsubscribe()
// //     }
// //   }, [dispatch]);

// //   return children;
// // };

// // export default AuthProvider;




// // 222222222222222222

// // import { useEffect } from "react";
// // import { useDispatch } from "react-redux";
// // import {
// //   setUser,
// //   setUserId,
// //   updateIsProfileCompleted,
// //   clearUser,
// //   setLoading,
// // } from "../store/authSlice";
// // import { supabase } from "@/supabase/config";

// // const AuthProvider = ({ children }) => {
// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     // Get initial session and set up listener in one go
// //     const { data: { subscription } } = supabase.auth.onAuthStateChange(
// //       async (event, session) => {
// //         console.log('Auth state changed:', event, session?.user?.id);

// //         const user = session?.user;

// //         if (user) {
// //           dispatch(setUser(user));
// //           dispatch(setUserId(user.id));

// //           // Check profile completion
// //           const { data: profile } = await supabase
// //             .from("profiles")
// //             .select("is_profile_completed")
// //             .eq("id", user.id)
// //             .single();

// //           if (profile?.is_profile_completed) {
// //             dispatch(updateIsProfileCompleted());
// //           }
// //         } else {
// //           dispatch(clearUser());
// //         }

// //         dispatch(setLoading(false));
// //       }
// //     );

// //     return () => subscription.unsubscribe();
// //   }, []); // Remove dispatch from dependencies

// //   return children;
// // };

// // export default AuthProvider;



// // import { useEffect } from "react";
// // import { useDispatch } from "react-redux";
// // import {
// //   setUser,
// //   setUserId,
// //   updateIsProfileCompleted,
// //   clearUser,
// //   setLoading,
// // } from "../store/authSlice";
// // import { supabase } from "@/supabase/config";

// // const AuthProvider = ({ children }) => {
// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     // TEMPORARY: Just set loading to false immediately
// //     dispatch(setLoading(false));
// //     dispatch(clearUser());
// //   }, []);

// //   return children;
// // };

// // export default AuthProvider;



// // 33333



// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
// import {
//   setUser,
//   setUserId,
//   updateIsProfileCompleted,
//   clearUser,
//   setLoading,
// } from "../store/authSlice";
// import { supabase } from "@/supabase/config";

// const AuthProvider = ({ children }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     let mounted = true;

//     const handleAuth = async (user) => {
//       try {
//         if (!user) {
//           if (mounted) dispatch(clearUser());
//           return;
//         }

//         if (mounted) {
//           dispatch(setUser(user));
//           dispatch(setUserId(user.id));
//         }

//         // Check profile completion
//         const { data: profile, error } = await supabase
//           .from("profiles")
//           .select("is_profile_completed")
//           .eq("id", user.id)
//           .maybeSingle();

//         if (error && !profile) {
//           // Profile doesn't exist, create it
//           await supabase.from("profiles").insert({
//             id: user.id,
//             is_profile_completed: false,
//           });
//         } else if (!error && profile?.is_profile_completed && mounted) {
//           dispatch(updateIsProfileCompleted());
//         }
//       } catch (error) {
//         console.error("Auth error:", error);
//       } finally {
//         if (mounted) dispatch(setLoading(false));
//       }
//     };

//     const initAuth = async () => {
//       const { data } = await supabase.auth.getSession();
//       console.log(data.user?.id);

//       await handleAuth(data?.session?.user);
//     };

//     initAuth();

//     const { data: { subscription } } = supabase.auth.onAuthStateChange(
//       async (event, session) => {
//         if (mounted && event === 'SIGNED_IN') {
//           await handleAuth(session?.user);
//         } else if(event === 'SIGNED_OUT') {
//           dispatch(clearUser())
//         }
//       }
//     );

//     return () => {
//       mounted = false;
//       subscription.unsubscribe();
//     };
//   }, [dispatch]);



//   return children;
// };

// export default AuthProvider;







// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import {
//   setUser,
//   setUserId,
//   updateIsProfileCompleted,
//   clearUser,
//   setLoading,
// } from "../store/authSlice";
// import { supabase } from "@/supabase/config";

// const AuthProvider = ({ children }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     let mounted = true;

//     const handleAuthState = async (user) => {
//       try {
//         if (!user) {
//           if (mounted) {
//             dispatch(clearUser());
//           }
//           return;
//         }

//         if (mounted) {
//           dispatch(setUser(user));
//           dispatch(setUserId(user.id));
//         }

//         // Fetch or create profile
//         await handleUserProfile(user.id);

//       } catch (error) {
//         console.error("Auth state error:", error);
//         if (mounted) {
//           dispatch(clearUser());
//         }
//       } finally {
//         if (mounted) {
//           dispatch(setLoading(false));
//         }
//       }
//     };

//     const handleUserProfile = async (userId) => {
//       try {
//         const { data: profile, error } = await supabase
//           .from("profiles")
//           .select("is_profile_completed")
//           .eq("id", userId)
//           .maybeSingle();

//         if (error) {
//           console.error("Error fetching profile:", error);
//           return;
//         }

//         if (!profile) {
//           // Profile doesn't exist, create it
//           const { error: insertError } = await supabase
//             .from("profiles")
//             .insert({
//               id: userId,
//               is_profile_completed: false,
//             });

//           if (insertError) {
//             console.error("Error creating profile:", insertError);
//           }
//           return;
//         }

//         // Update Redux state based on profile completion
//         if (profile.is_profile_completed && mounted) {
//           dispatch(updateIsProfileCompleted());
//         }
//       } catch (error) {
//         console.error("Profile handling error:", error);
//       }
//     };

//     const { data: { subscription } } = supabase.auth.onAuthStateChange(
//       async (event, session) => {
//         console.log('Auth event:', event, 'User ID:', session?.user?.id);

//         if (!mounted) return;
//         await handleAuthState(session?.user || null);
//       }
//     );

//     return () => {
//       mounted = false;
//       subscription.unsubscribe();
//     };
//   }, [dispatch]);

//   return children;
// };

// export default AuthProvider;




import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setUser,
  setUserId,
  updateIsProfileCompleted,
  setLoading,
} from "../store/authSlice";
import { supabase } from "@/supabase/config";


const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;

    const initAuth = async () => {
      dispatch(setLoading(true));

      const { data: { session }, error } = await supabase.auth.getSession();
      const user = session?.user || null;

      if (!mounted) return;

      if (user) {
        console.log("1");
        
        dispatch(setUser(user));
        dispatch(setUserId(user.id));

        // fetch or create profile    
        const { data: profile } = await supabase
          .from("profiles")
          .select("is_profile_completed")
          .eq("id", user.id)
          .maybeSingle();
        if (!profile) {
          await supabase.from("profiles").insert({ id: user.id, is_profile_completed: false });
          dispatch(updateIsProfileCompleted(false));
        } else {
          dispatch(updateIsProfileCompleted(profile.is_profile_completed));
        }
      }

      dispatch(setLoading(false));
    };

    initAuth();

    return () => {
      mounted = false;
    };
  }, [dispatch]);

  

  return children;
};

export default AuthProvider;
