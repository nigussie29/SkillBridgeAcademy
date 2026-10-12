import { useAuth } from "../../context/AuthContext";
import InstructorLayout from "./InstructorLayout";
import InstructorSidebar from "./InstructorSidebar";
import InstructorHeader from "./InstructorHeader";

export default function InstructorWorkspace({
  title,
  name,
  children,
}) {
  const { profile, user } = useAuth();
  const displayName = profile?.full_name || user?.email || name || "Instructor";
  return (
    <InstructorLayout
      sidebar={<InstructorSidebar />}
      header={<InstructorHeader name={displayName} title={title} />}
    >
      {children}
    </InstructorLayout>
  );
}