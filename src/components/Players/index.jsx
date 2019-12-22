import React, { useState, useEffect } from "react";
import Button from "../Button";
import playerData from "../../playersData";

const Players = () => {
    const [players, setPlayers] = useState(null);
    const [selectedPlayer, setSelectedPlayer] = useState(1);

    const handlePlayerSelection = id => {
        setSelectedPlayer(id);
    };
    const handleNextTrack = currentTrack => {
        let nextTrack;
        if (currentTrack === 11) {
            nextTrack = 1;
        } else {
            nextTrack = currentTrack + 1;
        }
        setSelectedPlayer(nextTrack);
    };
    const handlePreviousTrack = currentTrack => {
        let nextTrack;
        if (currentTrack === 1) {
            nextTrack = 11;
        } else {
            nextTrack = currentTrack - 1;
        }
        setSelectedPlayer(nextTrack);
    };
    useEffect(() => {
        setPlayers(playerData);
    }, []);
    return (
        <section className="players">
            <div className="players__content">
                <div className="players__selector">
                    {players &&
                        players.map(player => (
                            <div
                                key={player.id}
                                className={
                                    player.id === selectedPlayer
                                        ? "active"
                                        : null
                                }
                                onClick={() => handlePlayerSelection(player.id)}
                            >
                                <span className="player_id">{player.id}</span>
                                <p>{player.artist}</p>
                            </div>
                        ))}
                </div>
                {players &&
                    players.map(player => {
                        if (player.id === selectedPlayer) {
                            return (
                                <Player
                                    key={player.id}
                                    data={player}
                                    handleNextTrack={handleNextTrack}
                                    handlePreviousTrack={handlePreviousTrack}
                                />
                            );
                        }
                        return null;
                    })}
            </div>
        </section>
    );
};

export default Players;

const Player = ({ data, handleNextTrack, handlePreviousTrack }) => {
    if (data) {
        return (
            <div className="player">
                <figure className="player__image">
                    <img src={data.image} alt="" />
                </figure>
                <div>
                    <h2 className="player__tracktitle">{data.track}</h2>
                    <p className="player__bio">{data.bio}</p>
                    <div className="button-group">
                        <button
                            className="button player__button"
                            onClick={() => handlePreviousTrack(data.id)}
                        >
                            Prev
                        </button>

                        <button className="button player__button player__button--play">
                            Play
                        </button>
                        <button
                            className="button player__button"
                            onClick={() => handleNextTrack(data.id)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};
