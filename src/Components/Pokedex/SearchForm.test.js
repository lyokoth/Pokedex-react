import PokeList from "./PokeList";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { PokedexProvider } from "../../functions/Context";
test("type search function works as intended", () => {
    render(
        <Router>
            <PokedexProvider>
                <PokeList />
            </PokedexProvider>
        </Router>
    );

    // Assuming the select element has a label with "Type" text
    const selectElement = screen.getByLabelText("Search by Type");
    fireEvent.change(selectElement, { target: { value: 'bug' } });

    expect(selectElement.value).toBe('bug');
    expect(screen.getByText('bug')).toBeInTheDocument();
});


test("search for sewaddle", () => { 
        render(
            <Router>
                <PokedexProvider >
                    <PokeList />
                </PokedexProvider>
            </Router>
        );
        
        const searchInput = screen.getByPlaceholderText("Search by Name or ID");
        fireEvent.change(searchInput, { target: { value: "sewaddle" } });
        
        expect(searchInput.value).toBe("sewaddle");
        expect(screen.getByText("sewaddle")).toBeInTheDocument();
        }
    
);
