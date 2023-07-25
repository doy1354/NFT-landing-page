import OutlinedButton from "../../components/common/buttons/OutlinedButton";
import Filter from "./Filter";
import ResourceNftCard from "./ResourceNftCard";
import { nftData } from "./data.js";

export default function Resource() {
    return (
        <section
            id="resource"
            aria-label="resource section"
            className="bg-neutral-200"
        >
            <div className="container tablet:px-10 laptop:px-20 | py-16">
                <div className="space-y-10">
                    <h2 className="text-800 text-neutral-900 font-bold font-['Integral_CF',_sans-serif] leading-tight">
                        Discover more NFTs
                    </h2>

                    <Filter />

                    <div className="grid grid-cols-1 mobile-lg:grid-cols-2 laptop:grid-cols-3 min-[1360px]:grid-cols-4 gap-10">
                        {
                            nftData.map(item => <ResourceNftCard
                                key={item.id}
                                item={item}
                            />)
                        }
                    </div>

                    <OutlinedButton
                        type="button"
                        extraClasses="px-10 py-5 text-600 font-medium bg-neutral-300 leading-tight mx-auto"
                    >
                        More NFTs
                    </OutlinedButton>
                </div>
            </div>
        </section>
    );
}
