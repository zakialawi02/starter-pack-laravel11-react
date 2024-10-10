import Card from "@/Components/Element/Card/Card";
import SkeletonCard from "@/Components/Element/Skeleton/SkeletonCard";
import SkeletonCardImage from "@/Components/Element/Skeleton/SkeletonCardImage";
import SkeletonList from "@/Components/Element/Skeleton/SkeletonList";
import SkeletonParagraf from "@/Components/Element/Skeleton/SkeletonParagraf";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

const EmptyPage = ({ auth }) => {
    return (
        <>
            <Head title="EmptyPage"></Head>

            <DashboardLayout user={auth.user}>
                <Card>
                    <h1>h1 EmptyPage</h1>
                    <h2>h2 EmptyPage</h2>
                    <p>p EmptyPage</p>
                </Card>

                <SkeletonCard>
                    {/* <SkeletonParagraf></SkeletonParagraf> */}
                </SkeletonCard>

                <SkeletonCardImage>
                    <SkeletonParagraf></SkeletonParagraf>
                </SkeletonCardImage>

                <SkeletonParagraf></SkeletonParagraf>

                <SkeletonList></SkeletonList>
            </DashboardLayout>
        </>
    );
};

export default EmptyPage;
